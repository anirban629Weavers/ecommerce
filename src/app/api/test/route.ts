import { generateJwtToken } from "@/utils/generateToken";
import { NextRequest, NextResponse } from "next/server";

export const GET = function (req: NextRequest) {
  return NextResponse.json({}, { status: 403});
};
