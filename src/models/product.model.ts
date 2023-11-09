import { IProduct, IProduct_Review } from "@/interfaces/product.interface";
import mongoose, { Model, Schema } from "mongoose";

const productReviewSchema: Schema<IProduct_Review> = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const productSchema: Schema<IProduct> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "/images/product-1.png",
    },
    rating: {
      type: Number,
      default: 0,
      required: true,
    },
    reviews: {
      type: [productReviewSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
