import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/product.model";
import connectDB from "@/db";

export const DELETE = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    if (id && id.length !== 24) throw new Error("Invalid Search Id");
    else {
      await connectDB();
      const product = await Product.findById(id);
      if (product) {
        await product.deleteOne();
        return NextResponse.json(
          {
            success: true,
            message: "Product Deleted Successfully",
          },
          {
            status: 200,
          }
        );
      } else throw new Error(`Product not found with id = ${id}`);
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 404 }
    );
  }
};
