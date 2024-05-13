export const waitForExecution = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10_000));
};
