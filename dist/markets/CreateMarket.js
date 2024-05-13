"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../client");
const constants_1 = require("../constants");
const MarketFactory_1 = require("../abis/MarketFactory");
const MockUpdatePrices_1 = require("../prices/MockUpdatePrices");
const viem_1 = require("viem");
// Create Market Struct
const marketRequest = {
    isMultiAsset: true,
    indexTokenTicker: "ETH",
    marketTokenName: "BRRR",
    marketTokenSymbol: "BRRR",
    strategy: {
        exists: false,
        feedType: 0,
        feedAddress: "0x0000000000000000000000000000000000000000",
        feedId: "0x0000000000000000000000000000000000000000000000000000000000000000",
        merkleProof: [],
    },
};
const createMarket = async () => {
    let nonce = await client_1.publicClient.getTransactionCount(client_1.account);
    // Request New Market with Fee
    const { request } = await client_1.publicClient.simulateContract({
        account: client_1.account,
        address: constants_1.MARKET_FACTORY,
        abi: MarketFactory_1.MarketFactoryABI,
        functionName: "createNewMarket",
        args: [marketRequest],
        value: (0, viem_1.parseEther)("0.0001"),
        nonce: nonce,
    });
    const txHash = await client_1.walletClient.writeContract(request);
    nonce++;
    console.log("Market Created with txHash: ", txHash);
    console.log("Waiting for 10 seconds for the market to be created...");
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log("10 seconds have passed, continuing...");
    // Fetch the request key from the event emiited
    const receipt = await client_1.publicClient.getTransactionReceipt({
        hash: txHash,
    });
    const logs = (0, viem_1.parseEventLogs)({
        abi: MarketFactory_1.MarketFactoryABI,
        logs: receipt.logs,
        eventName: "MarketRequested",
    });
    const requestKey = logs[0].args.requestKey;
    // Use the key to get the associated info from the smart contract
    const requestInfo = await client_1.publicClient.readContract({
        address: constants_1.MARKET_FACTORY,
        abi: MarketFactory_1.MarketFactoryABI,
        functionName: "getRequest",
        args: [requestKey],
    });
    console.log("Request Key: ", requestKey);
    // Update Prices
    await (0, MockUpdatePrices_1.mockUpdatePrices)(["ETH", "USDC"], BigInt(requestInfo.requestTimestamp), nonce);
    nonce++;
    console.log("Waiting for 10 seconds for the prices to update...");
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log("10 seconds have passed, continuing...");
    // Execute Request
    const { request: request2 } = await client_1.publicClient.simulateContract({
        account: client_1.account,
        address: constants_1.MARKET_FACTORY,
        abi: MarketFactory_1.MarketFactoryABI,
        functionName: "executeMarketRequest",
        args: [requestKey],
        nonce: nonce,
    });
    const txHash2 = await client_1.walletClient.writeContract(request2);
    console.log("Market Executed with txHash: ", txHash2);
    nonce++;
};
createMarket();
