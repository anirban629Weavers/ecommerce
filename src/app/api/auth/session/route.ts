import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const GET = function (req: NextRequest) {
  const accessToken = req.headers.get("authorization")?.split(" ")[1];
  const refreshToken = req.headers.get("X-Refresh-Token");
  try {
    jwt.verify(
      accessToken as string,
      process.env.ACCESS_TOKEN_SECRET_KEY as string
    );
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    try {
      jwt.verify(
        refreshToken as string,
        process.env.REFRESH_TOKEN_SECRET_KEY as string
      );
      return new NextResponse("Unauthorized", { status: 401 });
    } catch (error) {
      return new NextResponse("Forbidden", { status: 403 });
    }
    // return NextResponse.json({ success: false }, { status: 401 });
    // return new NextResponse("Unauthorized", { status: 401 });
  }
};
