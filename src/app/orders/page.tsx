"use client";

import OrderRow from "@/components/OrderRow";
import TriangleLoader from "@/helpers/TriangleLoader";
import {
  ICounterState,
  ICounterState_Order,
} from "@/interfaces/redux.interface";
import { IUser_DB } from "@/interfaces/user.interface";
import { getAllOrders } from "@/redux/slices/orderSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const { userInfo, refreshToken }: ICounterState = useSelector(
    (state: any) => state.user
  );
  const { loading, orders }: ICounterState_Order = useSelector(
    (state: any) => state.order
  );

  useEffect(() => {
    if (userInfo && refreshToken) {
      const { _id }: IUser_DB | any = userInfo;
      dispatch(getAllOrders(_id as string));
    } else {
      router.push("/login");
    }
  }, [dispatch, refreshToken, router, userInfo]);

  return (
    <div
      className="container table-responsive mt-4"
      style={{ marginBottom: "7%" }}
    >
      {loading && <TriangleLoader />}
      {orders.length !== 0 ? (
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Order Id</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Delivery</th>
              <th scope="col">Items</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orderItem, index) => (
              <OrderRow key={index} orderItem={orderItem} row={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center" style={{ margin: "7%" }}>
          <strong>No Orders Found</strong>
        </p>
      )}
    </div>
  );
};

export default Orders;
