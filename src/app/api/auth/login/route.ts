import connectDB from "@/db";
import { IUser_Login } from "@/interfaces/user.interface";
import User from "@/models/user.model";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt";

export const POST = async (req: NextRequest) => {
  const cookie = cookies();
  const oneDay: number = 24 * 60 * 60 * 1000;
  try {
    await connectDB();
    const { email, password }: IUser_Login = await req.json();
    const user = await User.findOne({ email });
    if (user) {
      if (await user.matchPassword(password)) {
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
            message: "User Logged in Successfully",
            user,
            accessToken,
            refreshToken,
          },
          {
            status: 200,
          }
        );
      } else throw new Error("Password didn't matched");
    } else throw new Error("User doesn't exists");
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
};
