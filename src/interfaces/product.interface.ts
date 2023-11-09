export interface IProduct_Review {
  user: string;
  comment: string;
}

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  inStock: number;
  price: number;
  category: string;
  imageUrl: string;
  rating?: number;
  reviews?: Array<IProduct_Review>;
}

export interface IProduct_DB {
  _id: string;
  name: string;
  description: string;
  inStock: number;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  reviews: Array<IProduct_Review>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
