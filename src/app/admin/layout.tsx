"use client";
import {
  ICounterState,
  ICounterState_Admin,
} from "@/interfaces/redux.interface";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { refreshToken, userInfo }: ICounterState = useSelector(
    (state: any) => state.user
  );
  const { isAdmin }: ICounterState_Admin = useSelector(
    (state: any) => state.admin
  );

  (!userInfo || !refreshToken || !isAdmin) && router.push("/");

  return <>{children}</>;
};

export default AdminLayout;
