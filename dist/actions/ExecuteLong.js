"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const viem_1 = require("viem");
const approveContract_1 = require("../utils/approveContract");
const client_1 = require("../client");
const Router_1 = require("../abis/Router");
const waitForExecution_1 = require("../utils/waitForExecution");
const MockUpdatePrices_1 = require("../prices/MockUpdatePrices");
const TradeStorage_1 = require("../abis/TradeStorage");
const PositionManager_1 = require("../abis/PositionManager");
const executionFee = (0, viem_1.parseEther)("0.001");
const executeLong = async () => {
    // construct input args
    const collateralToken = Math.random() > 0.5 ? constants_1.USDC : constants_1.WETH;
    const isLong = collateralToken === constants_1.WETH;
    // $50
    const amountIn = isLong ? (0, viem_1.parseEther)("0.015") : BigInt(50e6);
    const input = {
        ticker: "ETH",
        collateralToken: collateralToken,
        collateralDelta: amountIn,
        sizeDelta: 500000000000000000000000000000000n, // 10x leverage
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
    let nonce = await client_1.publicClient.getTransactionCount(client_1.account);
    // approve the router to spend
    await (0, approveContract_1.approveContract)(collateralToken, constants_1.ROUTER, amountIn, nonce);
    nonce++;
    await (0, waitForExecution_1.waitForExecution)();
    // create a long request
    const { request } = await client_1.publicClient.simulateContract({
        account: client_1.account,
        address: constants_1.ROUTER,
        abi: Router_1.RouterABI,
        functionName: "createPositionRequest",
        args: [constants_1.MARKET_1_ID, input, conditionals],
        value: isLong ? amountIn + executionFee : executionFee,
        nonce: nonce,
    });
    await client_1.walletClient.writeContract(request);
    console.log("Long Request Created");
    nonce++;
    await (0, waitForExecution_1.waitForExecution)();
    // Fetch the request
    const orderKeys = await client_1.publicClient.readContract({
        address: constants_1.TRADE_STORAGE,
        abi: TradeStorage_1.TradeStorageABI,
        functionName: "getOrderKeys",
        args: [constants_1.MARKET_1_ID, false],
    });
    const orderKey = orderKeys[orderKeys.length - 1];
    // Fetch the order
    const order = await client_1.publicClient.readContract({
        address: constants_1.TRADE_STORAGE,
        abi: TradeStorage_1.TradeStorageABI,
        functionName: "getOrder",
        args: [constants_1.MARKET_1_ID, orderKey],
    });
    // update the prices
    await (0, MockUpdatePrices_1.mockUpdatePrices)(["ETH", "USDC"], BigInt(order.requestTimestamp), nonce);
    nonce++;
    console.log("Prices updated");
    await (0, waitForExecution_1.waitForExecution)();
    // execute the long request
    console.log("Order Key: ", orderKey);
    await client_1.walletClient.writeContract({
        account: client_1.account,
        address: constants_1.POSITION_MANAGER,
        abi: PositionManager_1.PositionManagerABI,
        functionName: "executePosition",
        args: [constants_1.MARKET_1_ID, orderKey, viem_1.zeroHash, client_1.account.address],
        nonce: nonce,
    });
    console.log("Long Request Executed");
};
executeLong();
