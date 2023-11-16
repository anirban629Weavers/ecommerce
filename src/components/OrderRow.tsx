import { IOrderData, IOrderData_DB } from "@/interfaces/order.interface";
import { formatDate } from "@/utils/getDateDetails";
import Link from "next/link";
import React from "react";

const OrderRow = ({
  row,
  orderItem,
}: {
  row: any;
  orderItem: IOrderData_DB;
}) => {
  return (
    <tr>
      <th scope="row">{row + 1}</th>
      <td>{orderItem._id}</td>
      <td>{orderItem.total}</td>
      <td>{formatDate(orderItem.createdAt).substring(0, 12)}</td>
      <td>
        {orderItem.status === true ? (
          <span className="text-primary">Paid</span>
        ) : (
          <span className="text-warning">Paid</span>
        )}
      </td>
      <td>
        {orderItem.isDelivered ? (
          <span className="text-primary">Delivered</span>
        ) : (
          <span className="text-warning">Pending</span>
        )}
      </td>
      <td>5</td>
      <td>
        {/* <i
        className="fa-solid fa-trash me-4 fa-lg"
        style={{ cursor: "pointer" }}
      ></i> */}
        <Link href={"/"}>
          <i
            className="fa-solid fa-location-arrow fa-lg"
            style={{ cursor: "pointer" }}
          ></i>
        </Link>
      </td>
    </tr>
  );
};

export default OrderRow;
