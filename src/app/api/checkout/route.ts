import { Checkout } from "@creem_io/nextjs";

const isTestMode = process.env.CREEM_TEST_MODE !== undefined
  ? process.env.CREEM_TEST_MODE === "true"
  : process.env.NODE_ENV !== "production";

export const GET = Checkout({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: isTestMode,
  defaultSuccessUrl: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"}/thank-you`,
  defaultCancelUrl: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"}/pricing`,
});
