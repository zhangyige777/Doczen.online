import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/pricing(.*)",
  "/blog(.*)",
  "/how-to(.*)",
  "/learn(.*)",
  "/use-cases(.*)",
  "/vs(.*)",
  "/features(.*)",
  "/security(.*)",
  "/contact(.*)",
  "/privacy(.*)",
  "/terms(.*)",
  "/thank-you(.*)",
  "/sitemap.xml",
  "/api/detect",
  "/api/checkout",
  "/api/webhook/(.*)",
  "/api/health",
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
