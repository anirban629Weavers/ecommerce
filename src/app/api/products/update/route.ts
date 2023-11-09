import { NextRequest, NextResponse } from "next/server";
import { IProduct_DB } from "@/interfaces/product.interface";
import Product from "@/models/product.model";
import connectDB from "@/db";

export const PATCH = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const productData = await req.json();

  try {
    if (id && id.length !== 24) throw new Error("Invalid Search Id");
    else {
      await connectDB();
      const product = await Product.findById(id);
      if (product) {
        const { category, description, name, price, imageUrl, inStock } =
          productData;

        product.category = category || product.category;
        product.description = description || product.description;
        product.name = name || product.name;
        product.price = price || product.price;
        product.imageUrl = imageUrl || product.imageUrl;
        product.inStock = inStock || product.inStock;

        const updatedProduct = await product.save();

        return NextResponse.json(
          {
            success: true,
            message: "Product Updated Successfully",
            product: updatedProduct,
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
