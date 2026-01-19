export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin/:path*"], // This protects everything inside the /admin folder
};