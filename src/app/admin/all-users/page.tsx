"use client";

import ShowUserRow from "@/components/ShowUserRow";
import TriangleLoader from "@/helpers/TriangleLoader";
import {
  ICounterState_Admin,
  ICounterState,
} from "@/interfaces/redux.interface";
import { IUser_DB } from "@/interfaces/user.interface";
import {
  deleteUserAdmin,
  getAllUsersAdmin,
  makeUserAdmin,
  removeUserAdmin,
  resetState,
} from "@/redux/slices/adminSlice";
import { successOptions, warningOptions } from "@/utils/alerts";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AllUsers = () => {
  const dispatch: any = useDispatch();
  const router: any = useRouter();
  const { loading, allUsers, isAdmin }: ICounterState_Admin = useSelector(
    (state: any) => state.admin
  );
  const users: Array<IUser_DB> = allUsers as Array<IUser_DB>;

  const { refreshToken, userInfo }: ICounterState = useSelector(
    (state: any) => state.user
  );

  const deleteUserHandler = (id: string) => {
    const token = refreshToken as string;
    dispatch(deleteUserAdmin({ id, refreshToken: token }));
  };
  const userAdminHandler = ({
    id,
    adminStatus,
  }: {
    id: string;
    adminStatus: boolean;
  }) => {
    const token = refreshToken as string;
    if (adminStatus) {
      dispatch(resetState());
      dispatch(removeUserAdmin({ id, refreshToken: token }));
      !loading && toast.warning("Removed From Admin Access", warningOptions);
    } else {
      dispatch(resetState());
      dispatch(makeUserAdmin({ id, refreshToken: token }));
      !loading && toast.success("Added Admin Access", successOptions);
    }
  };

  useEffect(() => {
    dispatch(getAllUsersAdmin(refreshToken!));
    !isAdmin && router.push("/login");
  }, [dispatch, refreshToken, isAdmin, router]);

  return (
    <>
      <div className="container table-responsive mt-4">
        {loading && <TriangleLoader />}
        {users.length === 0 ? (
          <p className="text-center" style={{ margin: "7%" }}>
            <strong>No Users Found</strong>
          </p>
        ) : (
          <table className="table mt-3" style={{ marginBottom: "10%" }}>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">User Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Phone</th>
                <th scope="col">Signed Up</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <ShowUserRow
                  key={index}
                  index={index}
                  user={user}
                  deleteUserHandler={deleteUserHandler}
                  userAdminHandler={userAdminHandler}
                  isSuperAdmin={(userInfo as IUser_DB).isSuperAdmin}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AllUsers;
