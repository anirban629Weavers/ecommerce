"use client";
import { IUser_DB } from "@/interfaces/user.interface";
import { warningOptions } from "@/utils/alerts";
import { formatDate } from "@/utils/getDateDetails";
import { toast } from "react-toastify";

const ShowUserRow = ({
  user,
  index,
  deleteUserHandler,
  userAdminHandler,
}: {
  user: IUser_DB;
  index: number;
  deleteUserHandler: Function;
  userAdminHandler: Function;
}) => (
  <tr>
    <td scope="col">{index + 1}</td>
    <td scope="col">
      {/* <Link
        href={`/invoice/${user._id}`}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          color: "#3B5D50",
        }}
      > */}
      {user._id}
      {/* </Link> */}
    </td>
    <td scope="col">{user.firstname + " " + user.lastname}</td>
    <td scope="col">{user.email}</td>
    <td
      scope="col"
      onClick={() => {
        if (user.isAdmin)
          toast.warning("Selected User is a Admin", warningOptions);
        else userAdminHandler({ id: user._id, adminStatus: user.isAdmin });
      }}
      style={{ cursor: "pointer" }}
    >
      {user.isAdmin ? (
        <span className="text-success">True</span>
      ) : (
        <span className="text-warning">False</span>
      )}
    </td>
    <td scope="col">{user.birthday}</td>
    <td scope="col">{user.phone}</td>
    <td scope="col">{formatDate(user.createdAt).substring(0, 12)}</td>
    <td
      className="text-center"
      onClick={() => {
        if (user.isAdmin)
          toast.warning("Selected User is a Admin", warningOptions);
        else deleteUserHandler(user._id);
      }}
      style={{ cursor: "pointer" }}
      aria-disabled
    >
      <i className="fa-solid fa-trash-can"></i>
    </td>
  </tr>
);
export default ShowUserRow;
