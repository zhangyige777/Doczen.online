export const runtime = "edge";

export async function GET() {
  const apiKey = process.env.DOCZEN_API_KEY;
  const apiUrl = process.env.DOCZEN_API_URL;

  return Response.json({
    status: "ok",
    env: {
      DOCZEN_API_KEY: apiKey ? `${apiKey.slice(0, 8)}...` : "NOT SET",
      DOCZEN_API_URL: apiUrl || "NOT SET (using default)",
    },
    timestamp: new Date().toISOString(),
  });
}
