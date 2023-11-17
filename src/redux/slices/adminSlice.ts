import {
  FETCH_ALL_ORDERS,
  FETCH_ALL_USERS,
  IS_ADMIN_CHECK,
} from "@/configs/url.config";
import { ICounterState_Admin } from "@/interfaces/redux.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ICounterState_Admin = {
  success: false,
  loading: false,
  error: undefined,
  message: undefined,
  isAdmin: false,
  allOrders: [],
  allUsers: [],
};

export const checkAdminState = createAsyncThunk(
  "admin/admin-state",
  async (refreshToken: string, thunkAPI) => {
    const { data } = await axios.get(IS_ADMIN_CHECK, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const getAllOrdersAdmin = createAsyncThunk(
  "admin/all-orders",
  async (refreshToken: string, thunkAPI) => {
    const { data } = await axios.get(FETCH_ALL_ORDERS, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const getAllUsersAdmin = createAsyncThunk(
  "admin/all-users",
  async (refreshToken: string, thunkAPI) => {
    const { data } = await axios.get(FETCH_ALL_USERS, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      console.log(data);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetState: (state) => {
      state.success = false;
      state.loading = false;
      state.error = undefined;
      state.message = undefined;
      state.isAdmin = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAdminState.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAdminState.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.isAdmin = true;
      })
      .addCase(checkAdminState.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
        state.isAdmin = false;
      })
      .addCase(getAllOrdersAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrdersAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allOrders = action.payload.orders;
      })
      .addCase(getAllOrdersAdmin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(getAllUsersAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allUsers = action.payload.users;
      })
      .addCase(getAllUsersAdmin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetState } = adminSlice.actions;
export default adminSlice.reducer;
