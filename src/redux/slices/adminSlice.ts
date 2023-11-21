import {
  DELETE_USER,
  FETCH_ALL_ORDERS,
  FETCH_ALL_USERS,
  IS_ADMIN_CHECK,
  MAKE_ADMIN,
  MAKE_ORDER_DELIVERED,
  MAKE_ORDER_NOT_DELIVERED,
  MAKE_ORDER_PAID,
  MAKE_ORDER_UNPAID,
  REMOVE_ADMIN,
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
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const deleteUserAdmin = createAsyncThunk(
  "admin/delete-user",
  async (
    { id, refreshToken }: { id: string; refreshToken: string },
    thunkAPI
  ) => {
    const { data } = await axios.get(`${DELETE_USER}?id=${id}`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const makeUserAdmin = createAsyncThunk(
  "admin/make-user-admin",
  async (
    { id, refreshToken }: { id: string; refreshToken: string },
    thunkAPI
  ) => {
    const { data } = await axios.get(`${MAKE_ADMIN}?id=${id}`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const removeUserAdmin = createAsyncThunk(
  "admin/remove-user-admin",
  async (
    { id, refreshToken }: { id: string; refreshToken: string },
    thunkAPI
  ) => {
    const { data } = await axios.get(`${REMOVE_ADMIN}?id=${id}`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const makeOrderPaid = createAsyncThunk(
  "admin/make-order-paid",
  async (
    { id, refreshToken }: { id: string; refreshToken: string },
    thunkAPI
  ) => {
    const { data } = await axios.get(`${MAKE_ORDER_PAID}?id=${id}`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const makeOrderUnpaid = createAsyncThunk(
  "admin/make-order-unpaid",
  async (
    { id, refreshToken }: { id: string; refreshToken: string },
    thunkAPI
  ) => {
    const { data } = await axios.get(`${MAKE_ORDER_UNPAID}?id=${id}`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const makeOrderDelivered = createAsyncThunk(
  "admin/make-order-delivered",
  async (
    { id, refreshToken }: { id: string; refreshToken: string },
    thunkAPI
  ) => {
    const { data } = await axios.get(`${MAKE_ORDER_DELIVERED}?id=${id}`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data.error);
    }
  }
);

export const makeOrderNotDelivered = createAsyncThunk(
  "admin/make-order-notdelivered",
  async (
    { id, refreshToken }: { id: string; refreshToken: string },
    thunkAPI
  ) => {
    const { data } = await axios.get(`${MAKE_ORDER_NOT_DELIVERED}?id=${id}`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (data.success) {
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
    },
    resetFullAdminState: (state) => {
      state.success = false;
      state.loading = false;
      state.error = undefined;
      state.message = undefined;
      state.isAdmin = false;
      state.allOrders = [];
      state.allUsers = [];
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
      })
      .addCase(deleteUserAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allUsers = action.payload.allUsers;
      })
      .addCase(deleteUserAdmin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(makeUserAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(makeUserAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allUsers = action.payload.allUsers;
      })
      .addCase(makeUserAdmin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(removeUserAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeUserAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allUsers = action.payload.allUsers;
      })
      .addCase(removeUserAdmin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(makeOrderPaid.pending, (state) => {
        state.loading = true;
      })
      .addCase(makeOrderPaid.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allOrders = action.payload.allOrders;
      })
      .addCase(makeOrderPaid.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(makeOrderUnpaid.pending, (state) => {
        state.loading = true;
      })
      .addCase(makeOrderUnpaid.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allOrders = action.payload.allOrders;
      })
      .addCase(makeOrderUnpaid.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(makeOrderDelivered.pending, (state) => {
        state.loading = true;
      })
      .addCase(makeOrderDelivered.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allOrders = action.payload.allOrders;
      })
      .addCase(makeOrderDelivered.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })

      .addCase(makeOrderNotDelivered.pending, (state) => {
        state.loading = true;
      })
      .addCase(makeOrderNotDelivered.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.allOrders = action.payload.allOrders;
      })
      .addCase(makeOrderNotDelivered.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetState, resetFullAdminState } = adminSlice.actions;
export default adminSlice.reducer;
