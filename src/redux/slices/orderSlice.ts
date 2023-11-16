import { ALL_ORDERS, CREATE_ORDER } from "@/configs/url.config";
import { IOrderData } from "@/interfaces/order.interface";
import { ICounterState_Order } from "@/interfaces/redux.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ICounterState_Order = {
  success: false,
  loading: false,
  error: undefined,
  message: undefined,
  orderDetails: undefined,
  orders: [],
};

export const createOrder = createAsyncThunk(
  "order/create-order",
  async (orderData: IOrderData, thunkAPI) => {
    const { data } = await axios.post(CREATE_ORDER, orderData, {
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
export const getAllOrders = createAsyncThunk(
  "order/all-orders",
  async (uid: string, thunkAPI) => {
    const { data } = await axios.get(`${ALL_ORDERS}?uid=${uid}`, {
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

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetState: (state) => {
      state.success = false;
      state.loading = false;
      state.error = undefined;
      state.message = undefined;
    },
    resetOrderDetails: (state) => {
      state.orderDetails = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.orderDetails = action.payload.orderDetails;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = undefined;
        state.orders = action.payload.orders;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetState } = orderSlice.actions;
export default orderSlice.reducer;
