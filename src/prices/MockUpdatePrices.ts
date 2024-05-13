import { MockPriceFeedABI } from "../abis/MockPriceFeed";
import { walletClient, publicClient, account } from "../client";
import { getMed, MOCK_PRICE_FEED } from "../constants";
import { waitForConfirmation } from "../utils/waitForConfirmation";

export const mockUpdatePrices = async (
  tokens: string[],
  timestamp: bigint,
  nonce: number
) => {
  // get meds, precisions, variances and timestamp
  const precisions = new Array(tokens.length).fill(0n);
  const variances = new Array(tokens.length).fill(0n);

  const timestamps = new Array(tokens.length).fill(timestamp);

  let meds: bigint[] = [];
  for (let token of tokens) {
    meds.push(getMed[token]);
  }
  // encode prices
  const encodedPrices = await publicClient.readContract({
    address: MOCK_PRICE_FEED,
    abi: MockPriceFeedABI,
    functionName: "encodePrices",
    args: [tokens, precisions, variances, timestamps, meds],
  });
  waitForConfirmation();
  // update the prices with the encoded repsonse
  const { request } = await publicClient.simulateContract({
    account,
    address: MOCK_PRICE_FEED,
    abi: MockPriceFeedABI,
    functionName: "updatePrices",
    args: [encodedPrices],
    nonce: nonce,
  });
  await walletClient.writeContract(request);
};
