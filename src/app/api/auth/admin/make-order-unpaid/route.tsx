import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWTPayload } from "jose";
import connectDB from "@/db";
import Order from "@/models/order.model";

export const GET = async function (req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const refreshToken = req.headers.get("Authorization")?.split(" ")[1];
  try {
    const paylaod = jwt.verify(
      refreshToken as string,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as JWTPayload;
    if (paylaod.isAdmin) {
      await connectDB();
      const order = await Order.findById(id);
      if (order) {
        order.status = false;
        await order.save();
        const allOrders = await Order.find({});
        return NextResponse.json(
          { success: true, message: "Order is unpaid", allOrders },
          { status: 200 }
        );
      } else throw new Error("No Order Found with this id");
    } else throw new Error("Unauthorized");
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 401 }
    );
  }
};
