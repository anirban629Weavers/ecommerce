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

export interface IOrderData {
  customer: string;
  email: string;
  phone: string;
  status: boolean;
  orderItems: Array<ICartItem_Order_Invoice>;
  subtotal: number;
  deliverycharge: number;
  total: number;
  isDelivered: boolean;
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
  createdAt: string;
  updatedAt: string;
  __v: number;
}
