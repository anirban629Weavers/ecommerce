import {
  LOGIN_USER_URL,
  SIGNUP_USER_URL,
  SIGNOUT_USER_URL,
} from "@/configs/url.config";
import { ICounterState } from "@/interfaces/redux.interface";
import { IUser_CLIENT, IUser_Login } from "@/interfaces/user.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ICounterState = {
  success: false,
  loading: false,
  userInfo: undefined,
  message: undefined,
  error: undefined,
  accessToken: undefined,
  refreshToken: undefined,
};

export const loginUser = createAsyncThunk(
  "users/login-user",
  async (userData: IUser_Login, thunkAPI) => {
    const { data } = await axios.post(LOGIN_USER_URL, userData, {
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
export const signupUser = createAsyncThunk(
  "users/signup-user",
  async (userData: IUser_CLIENT, thunkAPI) => {
    const { data } = await axios.post(SIGNUP_USER_URL, userData, {
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

export const signoutUser = createAsyncThunk(
  "users/signout-user",
  async (_, thunkAPI) => {
    const { data } = await axios.get(SIGNOUT_USER_URL, {
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.message = undefined;
      state.error = undefined;
      state.success = false;
    },
    updateTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.userInfo = action.payload.user;
        state.refreshToken = action.payload.refreshToken;
        state.accessToken = action.payload.accessToken;
        state.message = action.payload.message;
        state.success = true;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userInfo = action.payload.user;
        state.refreshToken = action.payload.refreshToken;
        state.accessToken = action.payload.accessToken;
        state.message = action.payload.message;
        state.success = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(signoutUser.fulfilled, (state, action) => {
        state.userInfo = undefined;
        state.refreshToken = undefined;
        state.accessToken = undefined;
        state.message = undefined;
        state.success = true;
        state.loading = false;
      })
      .addCase(signoutUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { resetState, updateTokens } = userSlice.actions;
export default userSlice.reducer;
