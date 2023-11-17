"use client";
import { ICounterState_Admin } from "@/interfaces/redux.interface";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isAdmin }: ICounterState_Admin = useSelector(
    (state: any) => state.admin
  );
  useEffect(() => {
    !isAdmin && router.push("/");
  }, [isAdmin, router]);

  return <>{children}</>;
};

export default AdminLayout;
