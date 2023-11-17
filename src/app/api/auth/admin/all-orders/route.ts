import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWTPayload } from "jose";
import Order from "@/models/order.model";
import { IOrderData_DB } from "@/interfaces/order.interface";
import connectDB from "@/db";

export const GET = async function (req: NextRequest) {
  const refreshToken = req.headers.get("Authorization")?.split(" ")[1];
  try {
    const paylaod = jwt.verify(
      refreshToken as string,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as JWTPayload;
    if (paylaod.isAdmin) {
      await connectDB();
      const orders: Array<IOrderData_DB> = await Order.find({});

      if (orders.length > 0) {
        return NextResponse.json(
          { success: true, message: "success", orders },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { success: false, message: "No Orders Found" },
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
