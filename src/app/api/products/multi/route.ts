import { NextRequest, NextResponse } from "next/server";
import { IProduct } from "@/interfaces/product.interface";
import Product from "@/models/product.model";
import connectDB from "@/db";

export const POST = async (req: NextRequest) => {
  const productData: Array<IProduct> = await req.json();
  try {
    await connectDB();
    productData.forEach(async (element: IProduct) => {
      await Product.create(element);
    });
    const products = await Product.find({});
    return NextResponse.json(
      {
        success: true,
        message: "Products Added Successfully",
        products,
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
