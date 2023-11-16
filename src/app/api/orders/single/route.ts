import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db";
import Order from "@/models/order.model";
import { IOrderData } from "@/interfaces/order.interface";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const uid = searchParams.get("uid");
  const oid = searchParams.get("oid");
  try {
    await connectDB();
    const existingOrder = await Order.findOne({ _id: oid, customerId: uid });
    if (!existingOrder) throw new Error("unauthorized");
    return NextResponse.json(
      {
        success: true,
        message: "success",
        orderDetails: existingOrder,
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
