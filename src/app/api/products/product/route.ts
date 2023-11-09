import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/product.model";
import { IProduct_DB } from "@/interfaces/product.interface";
import connectDB from "@/db";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    if (id && id.length !== 24) throw new Error("Invalid Search Id");
    else {
      await connectDB();
      const product = await Product.findById(id);
      if (product) {
        return NextResponse.json(
          {
            success: true,
            message: "Product Fetched Successfully",
            product,
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
