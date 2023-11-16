import mongoose, { mongo } from "mongoose";
import { IProduct_DB } from "./product.interface";

export interface ICartItem {
  productId: string;
  quantity: number;
  productData: IProduct_DB;
}

export interface ICartItem_Order_Invoice {
  productId: string;
  quantity: number;
  productData: {
    name: string;
    unitPrice: number;
    amount: number;
  };
}
export interface IOrderAddress {
  addressline1: string;
  addressline2: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface IOrderData {
  customerId: typeof mongoose.Types.ObjectId;
  customer: string;
  email: string;
  phone: string;
  status: boolean;
  orderItems: Array<ICartItem_Order_Invoice>;
  subtotal: number;
  deliverycharge: number;
  total: number;
  isDelivered: boolean;
  address: IOrderAddress;
}
export interface IOrderData_DB {
  _id: string;
  customer: string;
  email: string;
  phone: string;
  status: boolean;
  orderItems: Array<ICartItem_Order_Invoice>;
  subtotal: number;
  deliverycharge: number;
  total: number;
  isDelivered: boolean;
  address: IOrderAddress;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
