import { createPublicClient, http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia, base } from "viem/chains";
import * as envEnc from "@chainlink/env-enc";

envEnc.config();

export const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(process.env.TESTNET_RPC_URL),
});

export const walletClient = createWalletClient({
  chain: baseSepolia,
  transport: http(process.env.TESTNET_RPC_URL),
});

// Local Account
export const account = privateKeyToAccount(
  process.env.PRIVATE_KEY as `0x${string}`
);
