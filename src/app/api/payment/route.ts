// pages/api/payment.js
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export const POST = async (req: NextRequest) => {
  try {
    console.log("first");
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { amount } = await req.json();
    console.log(amount);

    const paymentOptions = {
      amount: amount * 100,
      currency: "INR",
    };

    const order = await razorpay.orders.create(paymentOptions);

    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
