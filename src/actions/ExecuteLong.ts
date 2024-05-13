import {
  USDC,
  WETH,
  MARKET_1_ID,
  ROUTER,
  TRADE_STORAGE,
  POSITION_MANAGER,
} from "../constants";
import { parseEther, zeroHash } from "viem";
import { approveContract } from "../utils/approveContract";
import { publicClient, account, walletClient } from "../client";
import { RouterABI } from "../abis/Router";
import { waitForExecution } from "../utils/waitForExecution";
import { mockUpdatePrices } from "../prices/MockUpdatePrices";
import { TradeStorageABI } from "../abis/TradeStorage";
import { PositionManagerABI } from "../abis/PositionManager";

const executionFee = parseEther("0.001");

const executeLong = async () => {
  // construct input args
  const collateralToken = Math.random() > 0.5 ? USDC : WETH;
  const isLong = collateralToken === WETH;

  // $50
  const amountIn = isLong ? parseEther("0.015") : BigInt(50e6);
  const input = {
    ticker: "ETH",
    collateralToken: collateralToken,
    collateralDelta: amountIn,
    sizeDelta: 500_000000000000000000000000000000n, // 10x leverage
    limitPrice: BigInt(0),
    maxSlippage: /*0.00*/ 300000000000000000000000000n, // 0.3%
    executionFee: executionFee,
    isLong: isLong,
    isLimit: false,
    isIncrease: true,
    reverseWrap: isLong,
    triggerAbove: false,
  };
  const conditionals = {
    stopLossSet: false,
    takeProfitSet: false,
    stopLossPercentage: BigInt(0),
    takeProfitPercentage: BigInt(0),
    stopLossPrice: BigInt(0),
    takeProfitPrice: BigInt(0),
  };

  // get the nonce
  let nonce = await publicClient.getTransactionCount(account);

  // approve the router to spend
  await approveContract(collateralToken, ROUTER, amountIn, nonce);
  nonce++;

  await waitForExecution();

  // create a long request
  const { request } = await publicClient.simulateContract({
    account,
    address: ROUTER,
    abi: RouterABI,
    functionName: "createPositionRequest",
    args: [MARKET_1_ID, input, conditionals],
    value: isLong ? amountIn + executionFee : executionFee,
    nonce: nonce,
  });
  await walletClient.writeContract(request);

  console.log("Long Request Created");

  nonce++;

  await waitForExecution();

  // Fetch the request
  const orderKeys = await publicClient.readContract({
    address: TRADE_STORAGE,
    abi: TradeStorageABI,
    functionName: "getOrderKeys",
    args: [MARKET_1_ID, false],
  });
  const orderKey = orderKeys[orderKeys.length - 1];
  // Fetch the order
  const order = await publicClient.readContract({
    address: TRADE_STORAGE,
    abi: TradeStorageABI,
    functionName: "getOrder",
    args: [MARKET_1_ID, orderKey],
  });

  // update the prices
  await mockUpdatePrices(
    ["ETH", "USDC"],
    BigInt(order.requestTimestamp),
    nonce
  );

  nonce++;

  console.log("Prices updated");

  await waitForExecution();

  // execute the long request
  console.log("Order Key: ", orderKey);

  await walletClient.writeContract({
    account,
    address: POSITION_MANAGER,
    abi: PositionManagerABI,
    functionName: "executePosition",
    args: [MARKET_1_ID, orderKey, zeroHash, account.address],
    nonce: nonce,
  });

  console.log("Long Request Executed");
};

executeLong();
