import { IProduct_DB } from "./product.interface";

export interface ICartItem {
  productId: string;
  quantity: number;
  productData: IProduct_DB;
}
