import { ICartItem } from "@/interfaces/order.interface";
import { IProduct_DB } from "@/interfaces/product.interface";
import { ICounterState_Order } from "@/interfaces/redux.interface";
import { createSlice } from "@reduxjs/toolkit";

const cartItems = (): Array<ICartItem> => {
  const existingItemsJSON = localStorage.getItem("cartItems");
  const existingItems: Array<ICartItem> = existingItemsJSON
    ? JSON.parse(existingItemsJSON)
    : [];
  return existingItems;
};

const itemsCount = () => {
  const existingItemsJSON = localStorage.getItem("cartItems");
  const existingItems: Array<ICartItem> = existingItemsJSON
    ? JSON.parse(existingItemsJSON)
    : [];
  let count = 0;
  existingItems.forEach((item: ICartItem) => {
    count += item.quantity;
  });
  return count;
};

const addToCart = (productData: IProduct_DB) => {
  const existingItemsJSON = localStorage.getItem("cartItems");
  const existingItems: Array<ICartItem> = existingItemsJSON
    ? JSON.parse(existingItemsJSON)
    : [];

  let existing = false;

  existingItems.forEach((item: ICartItem) => {
    if (item.productId === productData._id) {
      existing = true;
      item.quantity++;
    }
  });

  if (existing) {
    localStorage.setItem("cartItems", JSON.stringify(existingItems));
  } else {
    console.log("tr");
    const cartItem: ICartItem = {
      productId: productData._id,
      quantity: 1,
      productData: productData,
    };
    const updatedItems = [...existingItems, cartItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  }
};

const initialState: ICounterState_Order = {
  success: false,
  loading: false,
  error: undefined,
  message: undefined,
  cartItemsQuantity: 0,
  cartItems: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetState: (state) => {
      state.success = false;
      state.loading = false;
      state.error = undefined;
      state.message = undefined;
    },
    cartQuantity: (state) => {
      state.cartItemsQuantity = itemsCount();
    },
    addToCart_local: (state, action) => {
      const productData: IProduct_DB = action.payload;
      addToCart(productData);
      state.cartItems.forEach((item) => {
        if (item.productId === productData._id) {
          item.quantity++;
        }
      });
      state.cartItemsQuantity++;
    },
    loadCartItems_local: (state) => {
      const products: Array<ICartItem> = cartItems();
      state.cartItems = products;
    },
  },
  // extraReducers: (builder) => {},
});

export const {
  cartQuantity,
  addToCart_local,
  resetState,
  loadCartItems_local,
} = orderSlice.actions;
export default orderSlice.reducer;
