"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForConfirmation = void 0;
const waitForConfirmation = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
};
exports.waitForConfirmation = waitForConfirmation;
