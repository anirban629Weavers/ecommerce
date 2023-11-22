import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db";
import Order from "@/models/order.model";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const oid = searchParams.get("oid");
  try {
    await connectDB();
    const existingOrder = await Order.findOne({ _id: oid });
    if (!existingOrder) throw new Error("No Order found");
    return NextResponse.json(
      {
        success: true,
        message: "success",
        currentOrder: existingOrder,
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
