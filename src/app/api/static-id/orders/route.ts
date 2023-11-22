import { NextRequest, NextResponse } from "next/server";
import Order from "@/models/order.model";
import { IOrderData_DB } from "@/interfaces/order.interface";
import connectDB from "@/db";

export const GET = async function (req: NextRequest) {
  try {
    await connectDB();
    const orders: Array<IOrderData_DB> = await Order.find({});
    const orderIds = orders.map((order) => order._id as string);
    console.log(orderIds);
    if (orders.length > 0) {
      return NextResponse.json(
        { success: true, message: "success", orderIds },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "No Orders Found", orderIds: [] },
        { status: 404 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message, orderIds: [] },
      { status: 401 }
    );
  }
};
