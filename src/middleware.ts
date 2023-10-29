import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const refreshToken = req.cookies.get("refreshToken")?.value || "";

  if (isPublicPath && refreshToken) {
    console.log("triggered");
    return NextResponse.redirect(new URL("/", req.url));
  }
}
