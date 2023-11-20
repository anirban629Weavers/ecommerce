import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { warningOptions } from "./utils/alerts";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const refreshToken = req.cookies.get("refreshToken")?.value || "";

  if (isPublicPath && refreshToken)
    return NextResponse.redirect(new URL("/", req.url));

  if (path === "/profile" && !refreshToken)
    return NextResponse.redirect(new URL("/", req.url));

  // if (path.startsWith("/admin") && !refreshToken)
  //   return NextResponse.redirect(new URL("/", req.url));

  // if (path === "/invoice" && refreshToken === "") {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  // if (path === "/profile" && refreshToken === "") {
  //   console.log("first");
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
}
