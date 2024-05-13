"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const viem_1 = require("viem");
const MockUpdatePnl_1 = require("../prices/MockUpdatePnl");
const MockUpdatePrices_1 = require("../prices/MockUpdatePrices");
const Router_1 = require("../abis/Router");
const Market_1 = require("../abis/Market");
const PositionManager_1 = require("../abis/PositionManager");
const client_1 = require("../client");
const waitForExecution_1 = require("../utils/waitForExecution");
// Add liquidity to an existing vault
// vm.prank(OWNER);
// router.createDeposit{value: 20_000.01 ether + 1 gwei}(marketId, OWNER, weth, 20_000 ether, 0.01 ether, 0, true);
// vm.prank(OWNER);
// positionManager.executeDeposit{value: 0.01 ether}(marketId, market.getRequestAtIndex(marketId, 0).key);
const etherIn = (0, viem_1.parseEther)("0.1");
const addLiquidity = async () => {
    // Create a deposit request on the router
    let nonce = await client_1.publicClient.getTransactionCount(client_1.account);
    const { request } = await client_1.publicClient.simulateContract({
        account: client_1.account,
        address: constants_1.ROUTER,
        abi: Router_1.RouterABI,
        functionName: "createDeposit",
        args: [
            constants_1.MARKET_1_ID,
            client_1.account.address,
            constants_1.WETH,
            3000n,
            (0, viem_1.parseEther)("0.001"),
            0,
            true,
        ],
        value: etherIn,
        nonce: nonce,
    });
    const txHash = await client_1.walletClient.writeContract(request);
    console.log("Deposit Request Created with txHash: ", txHash);
    nonce++;
    await (0, waitForExecution_1.waitForExecution)();
    // Fetch the request
    const receipt = await client_1.publicClient.getTransactionReceipt({
        hash: txHash,
    });
    const logs = (0, viem_1.parseEventLogs)({
        abi: Market_1.MarketABI,
        logs: receipt.logs,
        eventName: "RequestCreated",
    });
    const requestKey = logs[0].args.key;
    const requestInfo = await client_1.publicClient.readContract({
        address: constants_1.MARKET,
        abi: Market_1.MarketABI,
        functionName: "getRequest",
        args: [constants_1.MARKET_1_ID, requestKey],
    });
    console.log(`Found Request ${requestKey} for timestamp ${requestInfo.requestTimestamp}`);
    // Set Prices and Pnl
    await (0, MockUpdatePnl_1.mockUpdatePnl)(requestInfo.requestTimestamp);
    nonce++;
    console.log("Pnl updated");
    await (0, MockUpdatePrices_1.mockUpdatePrices)(["ETH", "USDC"], BigInt(requestInfo.requestTimestamp), nonce);
    nonce++;
    console.log("Prices updated");
    await (0, waitForExecution_1.waitForExecution)();
    // execute the deposit request
    const { request: executeDepositRequest } = await client_1.publicClient.simulateContract({
        account: client_1.account,
        address: constants_1.POSITION_MANAGER,
        abi: PositionManager_1.PositionManagerABI,
        functionName: "executeDeposit",
        args: [constants_1.MARKET_1_ID, requestKey],
        nonce: nonce,
    });
    const executionTx = await client_1.walletClient.writeContract(executeDepositRequest);
    console.log("Deposit executed with txHash: ", executionTx);
};
addLiquidity();
