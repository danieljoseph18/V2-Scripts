"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForExecution = void 0;
const waitForExecution = async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
};
exports.waitForExecution = waitForExecution;
