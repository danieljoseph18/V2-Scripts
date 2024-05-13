import { walletClient, publicClient, account } from "../client";
import { MARKET_FACTORY } from "../constants";
import { MarketFactoryABI } from "../abis/MarketFactory";
import { mockUpdatePrices } from "../prices/MockUpdatePrices";
import { parseEther, parseEventLogs } from "viem";
import { waitForExecution } from "../utils/waitForExecution";

// Create Market Struct
const marketRequest = {
  isMultiAsset: true,
  indexTokenTicker: "ETH",
  marketTokenName: "BRRR",
  marketTokenSymbol: "BRRR",
  strategy: {
    exists: false,
    feedType: 0,
    feedAddress: "0x0000000000000000000000000000000000000000" as `0x${string}`,
    feedId:
      "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
    merkleProof: [],
  },
};

const createMarket = async () => {
  let nonce = await publicClient.getTransactionCount(account);
  // Request New Market with Fee

  const { request } = await publicClient.simulateContract({
    account,
    address: MARKET_FACTORY,
    abi: MarketFactoryABI,
    functionName: "createNewMarket",
    args: [marketRequest],
    value: parseEther("0.0001"),
    nonce: nonce,
  });
  const txHash = await walletClient.writeContract(request);

  nonce++;

  console.log("Market Created with txHash: ", txHash);

  console.log("Waiting for 10 seconds for the market to be created...");
  await new Promise((resolve) => setTimeout(resolve, 10_000));
  console.log("10 seconds have passed, continuing...");

  // Fetch the request key from the event emiited

  const receipt = await publicClient.getTransactionReceipt({
    hash: txHash,
  });

  const logs = parseEventLogs({
    abi: MarketFactoryABI,
    logs: receipt.logs,
    eventName: "MarketRequested",
  });

  const requestKey = logs[0].args.requestKey;

  // Use the key to get the associated info from the smart contract

  const requestInfo = await publicClient.readContract({
    address: MARKET_FACTORY,
    abi: MarketFactoryABI,
    functionName: "getRequest",
    args: [requestKey],
  });

  console.log("Request Key: ", requestKey);

  // Update Prices
  await mockUpdatePrices(
    ["ETH", "USDC"],
    BigInt(requestInfo.requestTimestamp),
    nonce
  );

  nonce++;

  console.log("Waiting for 10 seconds for the prices to update...");
  await new Promise((resolve) => setTimeout(resolve, 10_000));
  console.log("10 seconds have passed, continuing...");

  // Execute Request
  const { request: request2 } = await publicClient.simulateContract({
    account,
    address: MARKET_FACTORY,
    abi: MarketFactoryABI,
    functionName: "executeMarketRequest",
    args: [requestKey],
    nonce: nonce,
  });
  const txHash2 = await walletClient.writeContract(request2);

  console.log("Market Executed with txHash: ", txHash2);

  nonce++;
};

createMarket();
