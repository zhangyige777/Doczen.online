import { Checkout } from "@creem_io/nextjs";

export const runtime = "edge";

export const GET = Checkout({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: false,
  defaultSuccessUrl: `${process.env.NEXT_PUBLIC_APP_URL || "https://redactly.online"}/thank-you`,
});
