export const waitForExecution = async () => {
  console.log("Waiting for 10 seconds for the tx to be validated...");
  await new Promise((resolve) => setTimeout(resolve, 10_000));
  console.log("10 seconds have passed, continuing...");
};
