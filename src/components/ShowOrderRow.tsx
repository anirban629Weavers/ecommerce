import { IOrderData_DB } from "@/interfaces/order.interface";
import { formatDate } from "@/utils/getDateDetails";
import Link from "next/link";

const ShowOrderRow = ({
  order,
  index,
}: {
  order: IOrderData_DB;
  index: number;
}) => {
  console.log(order);
  return (
    <tr>
      <td scope="col">{index + 1}</td>
      <td scope="col">
        <Link
          href={`/invoice/${order._id}`}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "#3B5D50",
          }}
        >
          {order._id}
        </Link>
      </td>
      <td scope="col">{order.customer}</td>
      <td scope="col">{order.email}</td>
      <td scope="col">{order.total}</td>
      <td scope="col">{formatDate(order.createdAt).substring(0, 12)}</td>
      <td scope="col">
        {order.status ? (
          <span className="text-success">Paid</span>
        ) : (
          <span className="text-danger">Unpaid</span>
        )}
      </td>
      <td scope="col">
        {order.isDelivered ? (
          <span className="text-success">Delivered</span>
        ) : (
          <span className="text-danger">Pending</span>
        )}
      </td>
      <td scope="col">1</td>
    </tr>
  );
};
export default ShowOrderRow;
