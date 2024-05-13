export const PositionManagerABI = [
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
        name: "_rewardTracker",
        type: "address",
        internalType: "address",
      },
      {
        name: "_referralStorage",
        type: "address",
        internalType: "address",
      },
      {
        name: "_priceFeed",
        type: "address",
        internalType: "address",
      },
      {
        name: "_tradeEngine",
        type: "address",
        internalType: "address",
      },
      {
        name: "_weth",
        type: "address",
        internalType: "address",
      },
      {
        name: "_usdc",
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
    name: "averageDepositCost",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "averagePositionCost",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "averageWithdrawalCost",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "baseGasLimit",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "cancelMarketRequest",
    inputs: [
      {
        name: "_id",
        type: "bytes32",
        internalType: "MarketId",
      },
      {
        name: "_requestKey",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancelOrderRequest",
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
        name: "_isLimit",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
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
    name: "executeAdl",
    inputs: [
      {
        name: "_id",
        type: "bytes32",
        internalType: "MarketId",
      },
      {
        name: "_requestKey",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_positionKey",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executeDeposit",
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
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executePosition",
    inputs: [
      {
        name: "_id",
        type: "bytes32",
        internalType: "MarketId",
      },
      {
        name: "_orderKey",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_requestKey",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_feeReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executeWithdrawal",
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
    name: "liquidatePosition",
    inputs: [
      {
        name: "_id",
        type: "bytes32",
        internalType: "MarketId",
      },
      {
        name: "_positionKey",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_requestKey",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "market",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IMarket",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "marketFactory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IMarketFactory",
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
    name: "priceFeed",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPriceFeed",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "referralStorage",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IReferralStorage",
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
    name: "requestOwnershipHandover",
    inputs: [],
    outputs: [],
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
    name: "rewardTracker",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IGlobalRewardTracker",
      },
    ],
    stateMutability: "view",
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
    name: "transferTokensForIncrease",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "contract IVault",
      },
      {
        name: "_collateralToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralDelta",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_affiliateRebate",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_feeForExecutor",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_executor",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateGasEstimates",
    inputs: [
      {
        name: "_base",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deposit",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_withdrawal",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_position",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateMarketFactory",
    inputs: [
      {
        name: "_marketFactory",
        type: "address",
        internalType: "contract IMarketFactory",
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
    type: "function",
    name: "updateReferralStorage",
    inputs: [
      {
        name: "_referralStorage",
        type: "address",
        internalType: "contract IReferralStorage",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateRewardTracker",
    inputs: [
      {
        name: "_rewardTracker",
        type: "address",
        internalType: "contract IGlobalRewardTracker",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AdlExecuted",
    inputs: [
      {
        name: "market",
        type: "bytes32",
        indexed: true,
        internalType: "MarketId",
      },
      {
        name: "positionKey",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "sizeDelta",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "isLong",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdlTargetRatioReached",
    inputs: [
      {
        name: "market",
        type: "bytes32",
        indexed: true,
        internalType: "MarketId",
      },
      {
        name: "newFactor",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "isLong",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ExecutePosition",
    inputs: [
      {
        name: "_orderKey",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_fee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_feeDiscount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "GasLimitsUpdated",
    inputs: [
      {
        name: "depositGasLimit",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "withdrawalGasLimit",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "positionGasLimit",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MarketRequestCancelled",
    inputs: [
      {
        name: "_requestKey",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_token",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_amount",
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
    type: "error",
    name: "AlreadyInitialized",
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
    name: "PositionManager_AccessDenied",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_AdlFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_CancellationFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_DepositNotExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_ExecuteDepositFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_ExecuteWithdrawalFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InsufficientDelay",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidDeposit",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidDepositOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidKey",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidMarket",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidPrice",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidRequestType",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidTransferIn",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidWithdrawal",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_InvalidWithdrawalOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_LiquidationFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_LongSideNotFlagged",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_NotPositionOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_PNLFactorNotReduced",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_PTPRatioNotExceeded",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_PnlToPoolRatioNotExceeded",
    inputs: [
      {
        name: "pnlFactor",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "maxPnlFactor",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "PositionManager_PositionNotActive",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_PriceAlreadyUpdated",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_PriceUpdateFee",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_RequestDoesNotExist",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_ShortSideNotFlagged",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager_WithdrawalNotExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "Reentrancy",
    inputs: [],
  },
  {
    type: "error",
    name: "Unauthorized",
    inputs: [],
  },
] as const;
