"use client";
import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useRouter } from "next/navigation";
import { signoutUser, updateTokens } from "@/redux/slices/userSlice";
import { ICounterState } from "@/interfaces/redux.interface";
import {
  BASE_URL,
  REFRESH_TOKEN_URL,
  SESSION_CHECK_URL,
} from "@/configs/url.config";

const TokenValidator = ({ children }: { children: ReactNode }) => {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const { refreshToken, userInfo, accessToken }: ICounterState = useSelector(
    (state: any) => state.user
  );

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  useEffect(() => {
    const refreshAccessToken = async () => {
      await axiosInstance.post(REFRESH_TOKEN_URL, { refreshToken });
    };

    const checkSession = () => {
      axiosInstance.interceptors.request.use(
        (config) => {
          if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );

      axiosInstance.interceptors.response.use(
        (response) => {
          if (
            response &&
            response.status == 200 &&
            response.data.message === "Refreshed"
          ) {
            dispatch(
              updateTokens({
                accessToken: response.data.newAccessToken,
                refreshToken: response.data.newRefreshToken,
              })
            );
          }
          return response;
        },
        async (err) => {
          if ((err.response.status as number) === 401) {
            await refreshAccessToken();
          }
          if ((err.response.status as number) === 403) {
            dispatch(signoutUser());
          }
        }
      );

      axiosInstance.get(SESSION_CHECK_URL);
    };

    userInfo && checkSession();
  }, [userInfo, accessToken, axiosInstance, refreshToken, dispatch]);

  return <>{children}</>;
};

export default TokenValidator;
