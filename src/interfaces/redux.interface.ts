import { ICartItem, IOrderData, IOrderData_DB } from "./order.interface";
import { IProduct_DB } from "./product.interface";
import { IUser_DB } from "./user.interface";

export interface ICounterState {
  message: string | undefined;
  error: string | undefined;
  loading: boolean;
  success: boolean;
  userInfo: object | undefined | IUser_DB;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

export interface ICounterState_Product {
  message: string | undefined;
  error: string | undefined;
  loading: boolean;
  success: boolean;
  products: Array<IProduct_DB>;
}

export interface ICounterState_Cart {
  message: string | undefined;
  error: string | undefined;
  loading: boolean;
  success: boolean;
  cartItemsQuantity: number;
  cartItems: Array<ICartItem>;
  totalAmount: number;
}

export interface ICounterState_Order {
  message: string | undefined;
  error: string | undefined;
  loading: boolean;
  success: boolean;
  orderDetails: object | undefined | IOrderData_DB;
  orders: Array<IOrderData_DB>;
  currentOrder: IOrderData_DB | undefined;
}
