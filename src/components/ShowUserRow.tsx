"use client";
import { ICounterState_Admin } from "@/interfaces/redux.interface";
import { IUser_DB } from "@/interfaces/user.interface";
import { warningOptions } from "@/utils/alerts";
import { formatDate } from "@/utils/getDateDetails";
import { toast } from "react-toastify";

const ShowUserRow = ({
  user,
  index,
  deleteUserHandler,
  userAdminHandler,
  isSuperAdmin,
}: {
  user: IUser_DB;
  index: number;
  deleteUserHandler: Function;
  userAdminHandler: Function;
  isSuperAdmin: boolean;
}) => {
  return (
    <>
      {/* {user.isAdmin && !user.isSuperAdmin} */}
      <tr className={`${user.isSuperAdmin && "fw-bolder"}`}>
        <td scope="col">
          {" "}
          {user.isSuperAdmin ? (
            <i className="fa-solid fa-crown"></i>
          ) : (
            `${index}`
          )}
        </td>
        <td scope="col">
          {/* <Link
        href={`/invoice/${user._id}`}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          color: "#3B5D50",
        }}
      > */}
          {!user.isSuperAdmin ? user._id : "SUPER_ADMIN"}
          {/* </Link> */}
        </td>
        <td scope="col">{user.firstname + " " + user.lastname}</td>
        <td scope="col">{user.email}</td>
        <td
          scope="col"
          onClick={() => {
            if (user.isAdmin && isSuperAdmin)
              userAdminHandler({ id: user._id, adminStatus: user.isAdmin });
            else if (user.isAdmin && !user.isSuperAdmin)
              toast.warning("Selected User is a Admin", warningOptions);
            else userAdminHandler({ id: user._id, adminStatus: user.isAdmin });
          }}
          style={{ cursor: "pointer" }}
        >
          {user.isSuperAdmin ? (
            "----"
          ) : user.isAdmin ? (
            <span className="text-success">True</span>
          ) : (
            <span className="text-warning">False</span>
          )}
        </td>
        <td scope="col">{user.birthday}</td>
        <td scope="col">{user.isSuperAdmin ? "**********" : user.phone}</td>
        <td scope="col">
          {user.isSuperAdmin
            ? "Owner"
            : formatDate(user.createdAt).substring(0, 12)}
        </td>
        {!user.isSuperAdmin && (
          <td
            className="text-center"
            onClick={() => {
              if (isSuperAdmin) deleteUserHandler(user._id);
              else if (user.isAdmin)
                toast.warning("Selected User is a Admin", warningOptions);
              else deleteUserHandler(user._id);
            }}
            style={{ cursor: "pointer" }}
            aria-disabled
          >
            <i className="fa-solid fa-trash-can"></i>
          </td>
        )}
      </tr>
    </>
  );
};
export default ShowUserRow;
