import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { generateJwtToken } from "@/utils/generateToken";
import { cookies } from "next/headers";

export const GET = function (req: NextRequest) {
  console.log("triggering GET");
  const cookie = cookies();
  const oneDay: number = 24 * 60 * 60 * 1000;
  const refreshToken = req.headers.get("X-Refresh-Token");
  console.log(refreshToken);
  try {
    const isValidRefreshToken: JwtPayload | string = jwt.verify(
      refreshToken as string,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as { id: string };
    const accessToken = generateJwtToken(
      isValidRefreshToken.id,
      process.env.ACCESS_TOKEN_SECRET_KEY as string,
      "5m"
    );
    cookie.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      path: "/",
      maxAge: oneDay * 3,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return new NextResponse("Forbidden", { status: 403 });
  }
};
