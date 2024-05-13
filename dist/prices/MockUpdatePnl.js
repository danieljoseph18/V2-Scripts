"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUpdatePnl = void 0;
const client_1 = require("../client");
const MockPriceFeed_1 = require("../abis/MockPriceFeed");
const constants_1 = require("../constants");
const mockUpdatePnl = async (timestamp) => {
    // encode 0 and update pnl to 0
    const encodedPnl = await client_1.publicClient.readContract({
        address: constants_1.MOCK_PRICE_FEED,
        abi: MockPriceFeed_1.MockPriceFeedABI,
        functionName: "encodePnl",
        args: [0, constants_1.MARKET, timestamp, 0],
    });
    const { request } = await client_1.publicClient.simulateContract({
        account: client_1.account,
        address: constants_1.MOCK_PRICE_FEED,
        abi: MockPriceFeed_1.MockPriceFeedABI,
        functionName: "updatePnl",
        args: [encodedPnl],
    });
    return await client_1.walletClient.writeContract(request);
};
exports.mockUpdatePnl = mockUpdatePnl;
