"use client";
import ShowOrderRow from "@/components/ShowOrderRow";
import TriangleLoader from "@/helpers/TriangleLoader";
import { IOrderData_DB } from "@/interfaces/order.interface";
import {
  ICounterState,
  ICounterState_Admin,
} from "@/interfaces/redux.interface";
import {
  getAllOrdersAdmin,
  makeOrderDelivered,
  makeOrderNotDelivered,
  makeOrderPaid,
  makeOrderUnpaid,
} from "@/redux/slices/adminSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllOrders = () => {
  const dispatch: any = useDispatch();
  const { loading, allOrders }: ICounterState_Admin = useSelector(
    (state: any) => state.admin
  );
  const orders: Array<IOrderData_DB> = allOrders as Array<IOrderData_DB>;

  const { refreshToken }: ICounterState = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    dispatch(getAllOrdersAdmin(refreshToken!));
  }, [dispatch, refreshToken]);

  const OrderHandler = ({
    paid = false,
    unpaid = false,
    delivered = false,
    notDelivered = false,
    order_id,
  }: {
    paid?: boolean;
    unpaid?: boolean;
    delivered?: boolean;
    notDelivered?: boolean;
    order_id: string;
  }) => {
    paid &&
      dispatch(
        makeOrderPaid({
          id: order_id,
          refreshToken: refreshToken as string,
        })
      );
    unpaid &&
      dispatch(
        makeOrderUnpaid({
          id: order_id,
          refreshToken: refreshToken as string,
        })
      );
    delivered &&
      dispatch(
        makeOrderDelivered({
          id: order_id,
          refreshToken: refreshToken as string,
        })
      );
    notDelivered &&
      dispatch(
        makeOrderNotDelivered({
          id: order_id,
          refreshToken: refreshToken as string,
        })
      );
  };

  return (
    <div className="container table-responsive mt-4">
      {loading && <TriangleLoader />}
      {orders.length === 0 ? (
        <p className="text-center" style={{ margin: "7%" }}>
          <strong>No Orders Found</strong>
        </p>
      ) : (
        <table className="table mt-3" style={{ marginBottom: "10%" }}>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Order Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Delivery</th>
              <th scope="col">Items</th>
              {/* <th scope="col">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((order, index) => (
              <ShowOrderRow
                key={index}
                index={index}
                order={order}
                orderHandler={OrderHandler}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllOrders;
