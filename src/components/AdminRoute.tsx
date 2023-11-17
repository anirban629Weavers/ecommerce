"use client";
import { ICounterState } from "@/interfaces/redux.interface";
import { checkAdminState } from "@/redux/slices/adminSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch: any = useDispatch();
  const { refreshToken }: ICounterState = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    dispatch(checkAdminState(refreshToken!));
  }, [dispatch, refreshToken]);

  return <>{children}</>;
};

export default AdminRoute;
