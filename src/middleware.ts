import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { warningOptions } from "./utils/alerts";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const refreshToken = req.cookies.get("refreshToken")?.value || "";

  if (isPublicPath && refreshToken)
    return NextResponse.redirect(new URL("/", req.url));
}

// const generalPaths = path === "/cart";
// if (generalPaths && refreshToken === "")
//   return NextResponse.redirect(new URL("/login", req.url));
