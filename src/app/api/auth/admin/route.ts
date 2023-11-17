import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWTPayload } from "jose";

export const GET = async function (req: NextRequest) {
  const refreshToken = req.headers.get("Authorization")?.split(" ")[1];
  try {
    const paylaod = jwt.verify(
      refreshToken as string,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as JWTPayload;

    if (paylaod.isAdmin) {
      return NextResponse.json(
        { message: "success", success: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
};
