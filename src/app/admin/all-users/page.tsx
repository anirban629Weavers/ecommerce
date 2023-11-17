"use client";

import ShowUserRow from "@/components/ShowUserRow";
import TriangleLoader from "@/helpers/TriangleLoader";
import {
  ICounterState_Admin,
  ICounterState,
} from "@/interfaces/redux.interface";
import { IUser_DB } from "@/interfaces/user.interface";
import { getAllUsersAdmin } from "@/redux/slices/adminSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllUsers = () => {
  const dispatch: any = useDispatch();
  const { loading, allUsers }: ICounterState_Admin = useSelector(
    (state: any) => state.admin
  );
  const users: Array<IUser_DB> = allUsers as Array<IUser_DB>;

  const { refreshToken }: ICounterState = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    dispatch(getAllUsersAdmin(refreshToken!));
  }, [dispatch, refreshToken]);
  return (
    <div className="container table-responsive mt-4">
      {loading && <TriangleLoader />}
      {users.length === 0 ? (
        <p className="text-center" style={{ margin: "7%" }}>
          <strong>Your Cart is Empty</strong>
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
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <ShowUserRow key={index} index={index} user={user} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsers;
