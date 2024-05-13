import { publicClient, walletClient, account } from "../client";
import { ERC20ABI } from "../abis/ERC20";

export const approveContract = async (
  token: `0x${string}`,
  contractAddress: `0x${string}`,
  amount: bigint,
  nonce: number
) => {
  const { request: approval } = await publicClient.simulateContract({
    account,
    address: token,
    abi: ERC20ABI,
    functionName: "approve",
    args: [contractAddress, amount],
    nonce: nonce,
  });

  await walletClient.writeContract(approval);

  console.log("USDC Approved for Router");
};
