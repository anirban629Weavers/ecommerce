import { GET_ALL_PRODUCTS } from "@/configs/url.config";
import { IProduct_DB } from "@/interfaces/product.interface";
import { ICounterState_Product } from "@/interfaces/redux.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ICounterState_Product = {
  success: false,
  loading: false,
  error: undefined,
  message: undefined,
  products: [],
};

export const getAllProducts = createAsyncThunk(
  "products/all-products",
  async (_, thunkAPI) => {
    console.log("triggered");
    const { data } = await axios.get(GET_ALL_PRODUCTS, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetState: (state) => {
      state.success = false;
      state.loading = false;
      state.error = undefined;
      state.message = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.products = action.payload.products as Array<IProduct_DB>;
        state.success = true;
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetState } = productSlice.actions;
export default productSlice.reducer;
