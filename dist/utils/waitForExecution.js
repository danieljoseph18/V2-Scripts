"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForExecution = void 0;
const waitForExecution = async () => {
    console.log("Waiting for 10 seconds for the tx to be validated...");
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log("10 seconds have passed, continuing...");
};
exports.waitForExecution = waitForExecution;
