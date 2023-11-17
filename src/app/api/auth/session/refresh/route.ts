import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { generateAccessToken, generateRefreshToken } from "@/app/api/utils/jwt";

export const POST = async function (req: NextRequest) {
  const cookie = cookies();
  const oneDay: number = 24 * 60 * 60 * 1000;
  const { refreshToken } = await req.json();
  try {
    const tokenData = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as JwtPayload;

    const refreshTokenData = {
      id: tokenData.id,
      email: tokenData.email,
      firstname: tokenData.firstname,
      lastname: tokenData.lastname,
      isAdmin: tokenData.isAdmin,
    };

    const newAccessToken = generateAccessToken({ id: tokenData.id });
    const newRefreshToken = generateRefreshToken(refreshTokenData);

    cookie.set({
      name: "accessToken",
      value: newAccessToken,
      httpOnly: true,
      path: "/",
      maxAge: oneDay * 3,
    });
    cookie.set({
      name: "refreshToken",
      value: newRefreshToken,
      httpOnly: true,
      path: "/",
      maxAge: oneDay * 3,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Refreshed",
        newAccessToken,
        newRefreshToken,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 403 });
  }
};

/**
 * 
 * import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { generateAccessToken, generateRefreshToken } from "@/app/api/utils/jwt";

export const POST = async function (req: NextRequest) {
  const cookie = cookies();
  const oneDay: number = 24 * 60 * 60 * 1000;
  const { refreshToken } = await req.json();
  try {
    console.log("t1");
    const tokenData = jwt.verify(
      refreshToken as string,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as {
      id: string;
      email: string;
      firstname: string;
      lastname: string;
    };

    console.log("t2");
    console.log(tokenData);

    const refreshTokenData = {
      id: tokenData.id,
      email: tokenData.email,
      firstname: tokenData.firstname,
      lastname: tokenData.lastname,
    };

    const accessToken = generateAccessToken({ id: tokenData.id });
    const newRefreshToken = generateRefreshToken(refreshTokenData);

    cookie.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      path: "/",
      maxAge: oneDay * 3,
    });
    cookie.set({
      name: "refreshToken",
      value: newRefreshToken,
      httpOnly: true,
      path: "/",
      maxAge: oneDay * 3,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Refreshed",
        accessToken,
        refreshToken: newRefreshToken,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("t3", error.message);
    return new NextResponse(error.message, { status: 403 });
  }
};

 */
