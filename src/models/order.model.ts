import { ICartItem, IOrderData } from "@/interfaces/order.interface";
import mongoose, { Model, Schema } from "mongoose";

const cartItemSchema = new Schema<ICartItem>({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  productData: {
    type: Object,
    required: true,
  },
});

const orderSchema = new Schema<IOrderData>(
  {
    customer: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    orderItems: {
      type: [cartItemSchema],
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    deliverycharge: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Order: Model<IOrderData> =
  mongoose.models.Order || mongoose.model<IOrderData>("Order", orderSchema);

export default Order;
