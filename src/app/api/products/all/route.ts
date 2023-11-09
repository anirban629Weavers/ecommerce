import { NextRequest, NextResponse } from "next/server";
import { IProduct } from "@/interfaces/product.interface";
import Product from "@/models/product.model";
import connectDB from "@/db";

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();
    const products = await Product.find({});
    if (products.length === 0) throw new Error("No Products found");
    else {
      return NextResponse.json(
        {
          success: true,
          message: "Product Fetched Successfully",
          products,
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
