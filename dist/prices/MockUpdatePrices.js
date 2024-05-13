"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUpdatePrices = void 0;
const MockPriceFeed_1 = require("../abis/MockPriceFeed");
const client_1 = require("../client");
const constants_1 = require("../constants");
const waitForConfirmation_1 = require("../utils/waitForConfirmation");
const mockUpdatePrices = async (tokens, timestamp, nonce) => {
    // get meds, precisions, variances and timestamp
    const precisions = new Array(tokens.length).fill(0n);
    const variances = new Array(tokens.length).fill(0n);
    const timestamps = new Array(tokens.length).fill(timestamp);
    let meds = [];
    for (let token of tokens) {
        meds.push(constants_1.getMed[token]);
    }
    // encode prices
    const encodedPrices = await client_1.publicClient.readContract({
        address: constants_1.MOCK_PRICE_FEED,
        abi: MockPriceFeed_1.MockPriceFeedABI,
        functionName: "encodePrices",
        args: [tokens, precisions, variances, timestamps, meds],
    });
    (0, waitForConfirmation_1.waitForConfirmation)();
    // update the prices with the encoded repsonse
    const { request } = await client_1.publicClient.simulateContract({
        account: client_1.account,
        address: constants_1.MOCK_PRICE_FEED,
        abi: MockPriceFeed_1.MockPriceFeedABI,
        functionName: "updatePrices",
        args: [encodedPrices],
        nonce: nonce,
    });
    await client_1.walletClient.writeContract(request);
};
exports.mockUpdatePrices = mockUpdatePrices;
