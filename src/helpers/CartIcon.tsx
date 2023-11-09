"use client";
import { ICounterState_Order } from "@/interfaces/redux.interface";
import { cartQuantity } from "@/redux/slices/orderSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = ({ count }: { count: string }) => {
  return (
    <>
      <i className="fa-solid fa-cart-shopping fa-xl"></i>
      <span className="translate-middle badge rounded-pill bg-danger">
        {count}
      </span>
    </>
  );
};

export default CartIcon;
