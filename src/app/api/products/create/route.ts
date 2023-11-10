import { NextRequest, NextResponse } from "next/server";
import { IProduct } from "@/interfaces/product.interface";
import Product from "@/models/product.model";
import connectDB from "@/db";

export const POST = async (req: NextRequest) => {
  const productData: IProduct = await req.json();
  try {
    await connectDB();
    const existingProduct = await Product.findOne({
      name: productData.name,
      description: productData.description,
      category: productData.category,
    });
    if (existingProduct) throw new Error("Product Already Exists");
    else {
      const newProduct = await Product.create(productData);
      if (newProduct) {
        return NextResponse.json(
          {
            success: true,
            message: "Product Added Successfully",
            product: newProduct,
          },
          {
            status: 200,
          }
        );
      } else {
        throw new Error("Failed to add the Product");
      }
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 404 }
    );
  }
};
