import connectDB from "@/db";
import { IUser } from "@/interfaces/user.interface";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt";

export const POST = async (req: NextRequest) => {
  const cookie = cookies();
  const oneDay: number = 24 * 60 * 60 * 1000;
  try {
    await connectDB();
    const userData: IUser = await req.json();
    const isUser = await User.findOne({ email: userData.email });
    if (isUser) throw new Error("User Already exists");
    else {
      const user = await User.create(userData);
      if (user) {
        const accessToken = generateAccessToken({ id: user._id });
        const refreshToken = generateRefreshToken({
          id: user._id,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          isAdmin: user.isAdmin,
        });
        cookie.set({
          name: "accessToken",
          value: accessToken,
          httpOnly: true,
          path: "/",
          maxAge: oneDay * 3,
        });
        cookie.set({
          name: "refreshToken",
          value: refreshToken,
          httpOnly: true,
          path: "/",
          maxAge: oneDay * 3,
        });

        return NextResponse.json(
          {
            success: true,
            message: "User Registered Successfully",
            user,
            accessToken,
            refreshToken,
          },
          {
            status: 200,
          }
        );
      } else throw new Error("Internal Server Error");
    }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
};
