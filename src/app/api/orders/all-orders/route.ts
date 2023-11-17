import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db";
import Order from "@/models/order.model";
import jwt, { JwtPayload } from "jsonwebtoken";

export const GET = async (req: NextRequest) => {
  const token: string = req.headers.get("Authorization") || "";
  try {
    const payload = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET_KEY as string
    ) as JwtPayload;

    if (!payload.isAdmin)
      return NextResponse.json(
        { success: false, error: "Adming Permisson needed" },
        { status: 401 }
      );
    else {
      await connectDB();
      const existingOrders = await Order.find({});
      if (!existingOrders) throw new Error("No orders found");
      return NextResponse.json(
        {
          success: true,
          message: "success",
          orders: existingOrders,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 404 }
    );
  }
};
