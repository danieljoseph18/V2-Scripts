export const MockPriceFeedABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_marketFactory",
        type: "address",
        internalType: "address",
      },
      {
        name: "_weth",
        type: "address",
        internalType: "address",
      },
      {
        name: "_link",
        type: "address",
        internalType: "address",
      },
      {
        name: "_uniV3Router",
        type: "address",
        internalType: "address",
      },
      {
        name: "_uniV3Factory",
        type: "address",
        internalType: "address",
      },
      {
        name: "_subId",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_donId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_router",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "LINK",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "PRICE_DECIMALS",
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
    name: "UNISWAP_V3_FACTORY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "UNISWAP_V3_ROUTER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WETH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "callbackGasLimit",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "clearInvalidRequest",
    inputs: [
      {
        name: "_requestId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cumulativePnl",
    inputs: [
      {
        name: "market",
        type: "address",
        internalType: "address",
      },
      {
        name: "blockTimestamp",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [
      {
        name: "precision",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "market",
        type: "address",
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint48",
        internalType: "uint48",
      },
      {
        name: "cumulativePnl",
        type: "int40",
        internalType: "int40",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deleteRequest",
    inputs: [
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
    name: "encodePnl",
    inputs: [
      {
        name: "_precision",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "_market",
        type: "address",
        internalType: "address",
      },
      {
        name: "_timestamp",
        type: "uint48",
        internalType: "uint48",
      },
      {
        name: "_cumulativePnl",
        type: "int40",
        internalType: "int40",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "encodePrices",
    inputs: [
      {
        name: "_tickers",
        type: "string[]",
        internalType: "string[]",
      },
      {
        name: "_precisions",
        type: "uint8[]",
        internalType: "uint8[]",
      },
      {
        name: "_variances",
        type: "uint16[]",
        internalType: "uint16[]",
      },
      {
        name: "_timestamps",
        type: "uint48[]",
        internalType: "uint48[]",
      },
      {
        name: "_meds",
        type: "uint64[]",
        internalType: "uint64[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "gasOverhead",
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
    name: "getCumulativePnl",
    inputs: [
      {
        name: "_market",
        type: "address",
        internalType: "address",
      },
      {
        name: "_timestamp",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [
      {
        name: "pnl",
        type: "tuple",
        internalType: "struct IPriceFeed.Pnl",
        components: [
          {
            name: "precision",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "market",
            type: "address",
            internalType: "address",
          },
          {
            name: "timestamp",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "cumulativePnl",
            type: "int40",
            internalType: "int40",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPrices",
    inputs: [
      {
        name: "_ticker",
        type: "string",
        internalType: "string",
      },
      {
        name: "_timestamp",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [
      {
        name: "signedPrices",
        type: "tuple",
        internalType: "struct IPriceFeed.Price",
        components: [
          {
            name: "ticker",
            type: "bytes15",
            internalType: "bytes15",
          },
          {
            name: "precision",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "variance",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "timestamp",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "med",
            type: "uint64",
            internalType: "uint64",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPythId",
    inputs: [
      {
        name: "_ticker",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRequestData",
    inputs: [
      {
        name: "_requestId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPriceFeed.RequestData",
        components: [
          {
            name: "requester",
            type: "address",
            internalType: "address",
          },
          {
            name: "blockTimestamp",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "requestType",
            type: "uint8",
            internalType: "enum IPriceFeed.RequestType",
          },
          {
            name: "args",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRequestTimestamp",
    inputs: [
      {
        name: "_requestKey",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRequester",
    inputs: [
      {
        name: "_requestId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRequests",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSecondaryStrategy",
    inputs: [
      {
        name: "_ticker",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPriceFeed.SecondaryStrategy",
        components: [
          {
            name: "exists",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "feedType",
            type: "uint8",
            internalType: "enum IPriceFeed.FeedType",
          },
          {
            name: "feedAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "feedId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "merkleProof",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "handleOracleFulfillment",
    inputs: [
      {
        name: "requestId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "response",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "err",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_gasOverhead",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_callbackGasLimit",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_premiumFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_settlementFee",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_nativeLinkPriceFeed",
        type: "address",
        internalType: "address",
      },
      {
        name: "_sequencerUptimeFeed",
        type: "address",
        internalType: "address",
      },
      {
        name: "_timeToExpiration",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isRequestValid",
    inputs: [
      {
        name: "_requestKey",
        type: "bytes32",
        internalType: "bytes32",
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
    name: "nativeLinkPriceFeed",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "premiumFee",
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
    name: "priceUpdateRequested",
    inputs: [
      {
        name: "_requestId",
        type: "bytes32",
        internalType: "bytes32",
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
    name: "requestCumulativeMarketPnl",
    inputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "MarketId",
      },
      {
        name: "_requester",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "requestKey",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "requestPriceUpdate",
    inputs: [
      {
        name: "args",
        type: "string[]",
        internalType: "string[]",
      },
      {
        name: "_requester",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "requestKey",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "sequencerUptimeFeed",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setJavascriptSourceCode",
    inputs: [
      {
        name: "_priceUpdateSource",
        type: "string",
        internalType: "string",
      },
      {
        name: "_cumulativePnlSource",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTimeToExpiration",
    inputs: [
      {
        name: "_timeToExpiration",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportAsset",
    inputs: [
      {
        name: "_ticker",
        type: "string",
        internalType: "string",
      },
      {
        name: "_strategy",
        type: "tuple",
        internalType: "struct IPriceFeed.SecondaryStrategy",
        components: [
          {
            name: "exists",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "feedType",
            type: "uint8",
            internalType: "enum IPriceFeed.FeedType",
          },
          {
            name: "feedAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "feedId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "merkleProof",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
        ],
      },
      {
        name: "_tokenDecimals",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "timeToExpiration",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenDecimals",
    inputs: [
      {
        name: "ticker",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "unsupportAsset",
    inputs: [
      {
        name: "_ticker",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateBillingParameters",
    inputs: [
      {
        name: "_subId",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_donId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_gasOverhead",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_callbackGasLimit",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_premiumFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_settlementFee",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_nativeLinkPriceFeed",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatePnl",
    inputs: [
      {
        name: "_response",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatePrices",
    inputs: [
      {
        name: "_response",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateSequencerUptimeFeed",
    inputs: [
      {
        name: "_sequencerUptimeFeed",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AssetSupported",
    inputs: [
      {
        name: "ticker",
        type: "string",
        indexed: true,
        internalType: "string",
      },
      {
        name: "tokenDecimals",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LinkBalanceSettled",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestFulfilled",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestSent",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Response",
    inputs: [
      {
        name: "requestId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "requestData",
        type: "tuple",
        indexed: false,
        internalType: "struct IPriceFeed.RequestData",
        components: [
          {
            name: "requester",
            type: "address",
            internalType: "address",
          },
          {
            name: "blockTimestamp",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "requestType",
            type: "uint8",
            internalType: "enum IPriceFeed.RequestType",
          },
          {
            name: "args",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
      {
        name: "response",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "err",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SupportRemoved",
    inputs: [
      {
        name: "ticker",
        type: "string",
        indexed: true,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "EmptyArgs",
    inputs: [],
  },
  {
    type: "error",
    name: "EmptySource",
    inputs: [],
  },
  {
    type: "error",
    name: "EnumerableMapNonexistentKey",
    inputs: [
      {
        name: "key",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "error",
    name: "NoInlineSecrets",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyRouterCanFulfill",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_AlreadyInitialized",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_AssetRemovalFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_AssetSupportFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_FailedToClearRequest",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_InvalidMarket",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_InvalidRequestType",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_InvalidResponseLength",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_PnlNotSigned",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_PriceExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_PriceRequired",
    inputs: [
      {
        name: "ticker",
        type: "string",
        internalType: "string",
      },
    ],
  },
  {
    type: "error",
    name: "PriceFeed_PriceUpdateLength",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_SwapFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PriceFeed_ZeroBalance",
    inputs: [],
  },
] as const;
