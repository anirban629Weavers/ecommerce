import { ICartItem } from "@/interfaces/order.interface";
import { IProduct_DB } from "@/interfaces/product.interface";
import { ICounterState_Cart } from "@/interfaces/redux.interface";
import { createSlice } from "@reduxjs/toolkit";

const cartItems = (): Array<ICartItem> => {
  const existingItemsJSON = localStorage.getItem("cartItems");
  const existingItems: Array<ICartItem> = existingItemsJSON
    ? JSON.parse(existingItemsJSON)
    : [];
  return existingItems;
};

const itemsCount = () => {
  const existingItems: Array<ICartItem> = cartItems();
  let count = 0;
  existingItems.forEach((item: ICartItem) => {
    count += item.quantity;
  });
  return count;
};

const addToCart = (productData: IProduct_DB) => {
  const existingItems: Array<ICartItem> = cartItems();
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
    const cartItem: ICartItem = {
      productId: productData._id,
      quantity: 1,
      productData: productData,
    };
    const updatedItems = [...existingItems, cartItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  }
};

const removeSingleFromCart = (productId: string) => {
  const existingItems: Array<ICartItem> = cartItems();
  console.log(existingItems);
  existingItems.forEach((item) => {
    if (item.productId === productId) {
      item.quantity--;
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(existingItems));
};

const removeItemFromCart = (productId: string) => {
  const existingItems: Array<ICartItem> = cartItems();
  const updatedItems = existingItems.filter(
    (item: ICartItem) => item.productId !== productId
  );
  console.log(updatedItems);
  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
};

const calculatePrice = (): number => {
  const products: Array<ICartItem> = cartItems();
  let price = 0;
  products.forEach(
    (product) => (price += product.productData.price * product.quantity)
  );
  return price;
};

const initialState: ICounterState_Cart = {
  success: false,
  loading: false,
  error: undefined,
  message: undefined,
  cartItemsQuantity: 0,
  cartItems: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
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
      state.totalAmount = calculatePrice();
    },
    removeSingleFromCart_local: (state, action) => {
      const id: string = action.payload;
      removeSingleFromCart(id);
      state.cartItems.forEach((item) => {
        if (item.productId === id) {
          item.quantity--;
        }
      });
      state.cartItemsQuantity--;
      state.totalAmount = calculatePrice();
    },
    removeItem: (state, action) => {
      const { id, quantity, price } = action.payload;
      removeItemFromCart(id);
      state.totalAmount -= price * quantity;
      state.cartItems.filter((item) => item.productId !== id);
      state.cartItemsQuantity = itemsCount();
      state.totalAmount = calculatePrice();
    },
    loadCartItems_local: (state) => {
      const products: Array<ICartItem> = cartItems();
      state.cartItems = products;
    },
    makeCartEmpty: (state) => {
      localStorage.removeItem("cartItems");
      state.success = false;
      state.loading = false;
      state.error = undefined;
      state.message = undefined;
      state.cartItemsQuantity = 0;
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  cartQuantity,
  addToCart_local,
  resetState,
  loadCartItems_local,
  removeSingleFromCart_local,
  removeItem,
  makeCartEmpty,
} = cartSlice.actions;
export default cartSlice.reducer;
