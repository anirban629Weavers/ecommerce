"use client";
import axiosApiInstance from "@/interceptor";
import React, { ReactNode, useEffect } from "react";
import { headersWithAuthorizartion } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { counterState } from "@/interfaces/redux.interface";
import { ToastContainer } from "react-toastify";
import { signoutUser } from "@/redux/slices/userSlice";

const TokenValidator = ({ children }: { children: ReactNode }) => {
  const dispatch: any = useDispatch();
  const { accessToken, refreshToken }: counterState = useSelector(
    (state: any) => state.user
  );
  const api = axiosApiInstance(
    headersWithAuthorizartion(accessToken as string, refreshToken as string)
  );

  useEffect(() => {
    // api
    //   .get("/api/auth/session")
    //   .then((res: any) => {
    //     console.log(res);
    //   })
    //   .catch(async (err: any) => {
    //     console.log(err.response.status);
    //     if ((err.response.status as number) === 401) {
    //       console.log("ACCESS TOKEN EXPIRED");
    //     }
    //     if ((err.response.status as number) === 403) {
    //       console.log("REFRESH TOKEN EXPIRED");
    //     }
    //   });
  }, [accessToken, api, dispatch, refreshToken]);

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default TokenValidator;
