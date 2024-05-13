import {
  MARKET_1_ID,
  WETH,
  ROUTER,
  MARKET,
  POSITION_MANAGER,
} from "../constants";
import { parseEther, parseEventLogs } from "viem";
import { mockUpdatePnl } from "../prices/MockUpdatePnl";
import { mockUpdatePrices } from "../prices/MockUpdatePrices";
import { RouterABI } from "../abis/Router";
import { MarketABI } from "../abis/Market";
import { PositionManagerABI } from "../abis/PositionManager";
import { walletClient, publicClient, account } from "../client";
import { waitForExecution } from "../utils/waitForExecution";

const etherIn = parseEther("1");
const executionFee = parseEther("0.001");

const addLiquidity = async () => {
  // Create a deposit request on the router
  let nonce = await publicClient.getTransactionCount(account);

  const { request } = await publicClient.simulateContract({
    account,
    address: ROUTER,
    abi: RouterABI,
    functionName: "createDeposit",
    args: [MARKET_1_ID, account.address, WETH, etherIn, executionFee, 0, true],
    value: etherIn + executionFee,
    nonce: nonce,
  });

  const txHash = await walletClient.writeContract(request);

  console.log("Deposit Request Created with txHash: ", txHash);

  nonce++;

  await waitForExecution();

  // Fetch the request
  const receipt = await publicClient.getTransactionReceipt({
    hash: txHash,
  });

  const logs = parseEventLogs({
    abi: MarketABI,
    logs: receipt.logs,
    eventName: "RequestCreated",
  });

  const requestKey = logs[0].args.key;

  const requestInfo = await publicClient.readContract({
    address: MARKET,
    abi: MarketABI,
    functionName: "getRequest",
    args: [MARKET_1_ID, requestKey],
  });

  console.log(
    `Found Request ${requestKey} for timestamp ${requestInfo.requestTimestamp}`
  );

  // Set Prices and Pnl
  await mockUpdatePnl(requestInfo.requestTimestamp);

  nonce++;
  console.log("Pnl updated");

  await mockUpdatePrices(
    ["ETH", "USDC"],
    BigInt(requestInfo.requestTimestamp),
    nonce
  );

  nonce++;

  console.log("Prices updated");

  await waitForExecution();

  // execute the deposit request
  const { request: executeDepositRequest } =
    await publicClient.simulateContract({
      account,
      address: POSITION_MANAGER,
      abi: PositionManagerABI,
      functionName: "executeDeposit",
      args: [MARKET_1_ID, requestKey],
      nonce: nonce,
    });
  const executionTx = await walletClient.writeContract(executeDepositRequest);

  console.log("Deposit executed with txHash: ", executionTx);
};

addLiquidity();
