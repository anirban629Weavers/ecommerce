import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db";
import Order from "@/models/order.model";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const uid = searchParams.get("uid");
  try {
    await connectDB();
    const existingOrders = await Order.find({ customerId: uid });
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
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 404 }
    );
  }
};
