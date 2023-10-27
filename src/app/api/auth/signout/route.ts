import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const cookie = cookies();
  try {
    cookie.delete("refreshToken");
    cookie.delete("accessToken");
    return NextResponse.json({
      success: true,
      message: "User Signed Out Successfully",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
};
