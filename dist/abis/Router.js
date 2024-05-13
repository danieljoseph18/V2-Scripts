"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterABI = void 0;
exports.RouterABI = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_marketFactory",
                type: "address",
                internalType: "address",
            },
            {
                name: "_market",
                type: "address",
                internalType: "address",
            },
            {
                name: "_priceFeed",
                type: "address",
                internalType: "address",
            },
            {
                name: "_usdc",
                type: "address",
                internalType: "address",
            },
            {
                name: "_weth",
                type: "address",
                internalType: "address",
            },
            {
                name: "_positionManager",
                type: "address",
                internalType: "address",
            },
            {
                name: "_rewardTracker",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "receive",
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "cancelOwnershipHandover",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "completeOwnershipHandover",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "createDeposit",
        inputs: [
            {
                name: "_id",
                type: "bytes32",
                internalType: "MarketId",
            },
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "_tokenIn",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_executionFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_stakeDuration",
                type: "uint40",
                internalType: "uint40",
            },
            {
                name: "_shouldWrap",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "createPositionRequest",
        inputs: [
            {
                name: "_id",
                type: "bytes32",
                internalType: "MarketId",
            },
            {
                name: "_trade",
                type: "tuple",
                internalType: "struct Position.Input",
                components: [
                    {
                        name: "ticker",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "collateralToken",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "collateralDelta",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "sizeDelta",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "limitPrice",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "maxSlippage",
                        type: "uint128",
                        internalType: "uint128",
                    },
                    {
                        name: "executionFee",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "isLong",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "isLimit",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "isIncrease",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "reverseWrap",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "triggerAbove",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
            },
            {
                name: "_conditionals",
                type: "tuple",
                internalType: "struct Position.Conditionals",
                components: [
                    {
                        name: "stopLossSet",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "takeProfitSet",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "stopLossPercentage",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "takeProfitPercentage",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "stopLossPrice",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "takeProfitPrice",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "createWithdrawal",
        inputs: [
            {
                name: "_id",
                type: "bytes32",
                internalType: "MarketId",
            },
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "_tokenOut",
                type: "address",
                internalType: "address",
            },
            {
                name: "_marketTokenAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_executionFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_shouldUnwrap",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "grantRoles",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "roles",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "hasAllRoles",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "roles",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "hasAnyRole",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "roles",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "result",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "ownershipHandoverExpiresAt",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "result",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "renounceRoles",
        inputs: [
            {
                name: "roles",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "requestExecutionPricing",
        inputs: [
            {
                name: "_id",
                type: "bytes32",
                internalType: "MarketId",
            },
            {
                name: "_key",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_isPositionKey",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [
            {
                name: "priceRequestKey",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "requestOwnershipHandover",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "requestPricingForAsset",
        inputs: [
            {
                name: "_ticker",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [
            {
                name: "priceRequestKey",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "requestPricingForMarket",
        inputs: [
            {
                name: "_id",
                type: "bytes32",
                internalType: "MarketId",
            },
        ],
        outputs: [
            {
                name: "priceRequestKey",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "revokeRoles",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "roles",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "rolesOf",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "roles",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "updateConfig",
        inputs: [
            {
                name: "_marketFactory",
                type: "address",
                internalType: "address",
            },
            {
                name: "_positionManager",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "updatePriceFeed",
        inputs: [
            {
                name: "_priceFeed",
                type: "address",
                internalType: "contract IPriceFeed",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "DepositRequestCreated",
        inputs: [
            {
                name: "market",
                type: "bytes32",
                indexed: false,
                internalType: "MarketId",
            },
            {
                name: "owner",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "tokenIn",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amountIn",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipHandoverCanceled",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipHandoverRequested",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "oldOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "PnlRequested",
        inputs: [
            {
                name: "requestKey",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
            {
                name: "market",
                type: "bytes32",
                indexed: false,
                internalType: "MarketId",
            },
            {
                name: "requester",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "PositionRequestCreated",
        inputs: [
            {
                name: "market",
                type: "bytes32",
                indexed: false,
                internalType: "MarketId",
            },
            {
                name: "ticker",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "isLong",
                type: "bool",
                indexed: false,
                internalType: "bool",
            },
            {
                name: "isIncrease",
                type: "bool",
                indexed: false,
                internalType: "bool",
            },
            {
                name: "sizeDelta",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "collateralDelta",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "PriceUpdateRequested",
        inputs: [
            {
                name: "requestKey",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
            {
                name: "tickers",
                type: "string[]",
                indexed: false,
                internalType: "string[]",
            },
            {
                name: "requester",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RolesUpdated",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "roles",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "WithdrawalRequestCreated",
        inputs: [
            {
                name: "market",
                type: "bytes32",
                indexed: false,
                internalType: "MarketId",
            },
            {
                name: "owner",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "tokenOut",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amountOut",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "AlreadyInitialized",
        inputs: [],
    },
    {
        type: "error",
        name: "Gas_InsufficientExecutionFee",
        inputs: [
            {
                name: "executionFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "minExecutionFee",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "Gas_InsufficientMsgValue",
        inputs: [
            {
                name: "valueSent",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "executionFee",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "Gas_InvalidActionType",
        inputs: [],
    },
    {
        type: "error",
        name: "NewOwnerIsZeroAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NoHandoverRequest",
        inputs: [],
    },
    {
        type: "error",
        name: "Position_InvalidSlippage",
        inputs: [],
    },
    {
        type: "error",
        name: "Reentrancy",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_CantWrapUSDC",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidAmountIn",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidAmountInForWrap",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidAsset",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidAssetId",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidCollateralToken",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidConditional",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidLimitPrice",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidPriceUpdateFee",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidRequest",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidStopLossPercentage",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidTakeProfitPercentage",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidTokenIn",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_InvalidTokenOut",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_MarketDoesNotExist",
        inputs: [],
    },
    {
        type: "error",
        name: "Router_SizeExceedsPosition",
        inputs: [],
    },
    {
        type: "error",
        name: "Unauthorized",
        inputs: [],
    },
];
