import { publicClient, walletClient, account } from "../client";
import { MockPriceFeedABI } from "../abis/MockPriceFeed";
import { MARKET, MOCK_PRICE_FEED } from "../constants";

export const mockUpdatePnl = async (timestamp: number) => {
  // encode 0 and update pnl to 0
  const encodedPnl = await publicClient.readContract({
    address: MOCK_PRICE_FEED,
    abi: MockPriceFeedABI,
    functionName: "encodePnl",
    args: [0, MARKET, timestamp, 0],
  });

  const { request } = await publicClient.simulateContract({
    account,
    address: MOCK_PRICE_FEED,
    abi: MockPriceFeedABI,
    functionName: "updatePnl",
    args: [encodedPnl],
  });

  return await walletClient.writeContract(request);
};
