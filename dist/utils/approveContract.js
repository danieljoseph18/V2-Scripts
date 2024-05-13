"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveContract = void 0;
const client_1 = require("../client");
const ERC20_1 = require("../abis/ERC20");
const approveContract = async (token, contractAddress, amount, nonce) => {
    const { request: approval } = await client_1.publicClient.simulateContract({
        account: client_1.account,
        address: token,
        abi: ERC20_1.ERC20ABI,
        functionName: "approve",
        args: [contractAddress, amount],
        nonce: nonce,
    });
    await client_1.walletClient.writeContract(approval);
    console.log("USDC Approved for Router");
};
exports.approveContract = approveContract;
