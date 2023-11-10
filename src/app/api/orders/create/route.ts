import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db";
import Order from "@/models/order.model";
import { IOrderData } from "@/interfaces/order.interface";

export const POST = async (req: NextRequest) => {
  const orderData: IOrderData = await req.json();
  try {
    await connectDB();
    const newOrder = await Order.create(orderData);
    return NextResponse.json(
      {
        success: true,
        message: "Order Created",
        orderDetails: newOrder,
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
