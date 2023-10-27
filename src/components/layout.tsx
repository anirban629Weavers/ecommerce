import React, { ReactNode } from "react";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Layout;
