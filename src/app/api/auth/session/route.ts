import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const GET = async function (req: NextRequest) {
  const accessToken = req.headers.get("Authorization")?.split(" ")[1];
  try {
    jwt.verify(
      accessToken as string,
      process.env.ACCESS_TOKEN_SECRET_KEY as string
    );
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
};
