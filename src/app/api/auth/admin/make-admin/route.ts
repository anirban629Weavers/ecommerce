import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWTPayload } from "jose";
import connectDB from "@/db";
import User from "@/models/user.model";

export const GET = async function (req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const refreshToken = req.headers.get("Authorization")?.split(" ")[1];
  const id = searchParams.get("id");
  console.log(searchParams, refreshToken, id);
  try {
    const paylaod = jwt.verify(
      refreshToken as string,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as JWTPayload;
    if (paylaod.isAdmin) {
      await connectDB();
      const user = await User.findById(id);
      if (user) {
        user.isAdmin = true;
        await user.save();
        const allUsers = await User.find({});
        return NextResponse.json(
          { success: true, message: "User Deleted Successfully", allUsers },
          { status: 200 }
        );
      } else throw new Error("No User Found with this id");
    } else throw new Error("Unauthorized");
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 401 }
    );
  }
};
