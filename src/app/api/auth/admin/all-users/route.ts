import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWTPayload } from "jose";
import connectDB from "@/db";
import { IUser_DB } from "@/interfaces/user.interface";
import User from "@/models/user.model";

export const GET = async function (req: NextRequest) {
  const refreshToken = req.headers.get("Authorization")?.split(" ")[1];
  try {
    const paylaod = jwt.verify(
      refreshToken as string,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as JWTPayload;
    if (paylaod.isAdmin) {
      await connectDB();
      const users: Array<IUser_DB> = await User.find({});
      if (users.length > 0) {
        return NextResponse.json(
          { success: true, message: "success", users },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { success: false, message: "No Users Found" },
          { status: 404 }
        );
      }
    } else {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
};
