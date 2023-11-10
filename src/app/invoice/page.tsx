"use client";

import { BrandHeading } from "@/helpers";
import TriangleLoader from "@/helpers/TriangleLoader";
import { IOrderData_DB } from "@/interfaces/order.interface";
import {
  ICounterState,
  ICounterState_Order,
} from "@/interfaces/redux.interface";
import { makeCartEmpty } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomerDetails = ({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) => {
  return (
    <ul className="list-unstyled">
      <li className="text-muted">
        To: <span style={{ color: "#5d9fc5" }}>{name}</span>
      </li>
      <li className="text-muted">
        <i className="fa-solid fa-envelope"></i> {email}
      </li>
      <li className="text-muted">
        <i className="fas fa-phone"></i> {phone}
      </li>
      <li className="text-muted">
        <i className="fa-solid fa-globe mr-2"></i> India
      </li>
    </ul>
  );
};

const InvoiceDetails = ({
  id,
  date,
  status,
}: {
  id: string;
  date: string;
  status: boolean;
}) => {
  return (
    <ul className="list-unstyled">
      <li className="text-muted">
        <i
          className="fas fa-circle"
          style={{ color: "#3B5D50", marginRight: "2%" }}
        ></i>
        <span className="fw-bold">ID:</span> #{id}
      </li>
      <li className="text-muted">
        <i
          className="fas fa-circle"
          style={{ color: "#3B5D50", marginRight: "2%" }}
        ></i>
        <span className="fw-bold">Creation Date: </span>
        {date}
      </li>
      <li className="text-muted">
        <i
          className="fas fa-circle"
          style={{ color: "#3B5D50", marginRight: "2%" }}
        ></i>
        <span className="me-1 fw-bold">Status:</span>
        {status ? (
          <span className="badge bg-success text-black fw-bold">Paid</span>
        ) : (
          <span className="badge bg-warning text-black fw-bold">Unpaid</span>
        )}
      </li>
    </ul>
  );
};

const ItemDetails = ({
  no,
  name,
  qty,
  unitPrice,
  totalAmount,
}: {
  no?: string;
  name: string;
  qty: number;
  unitPrice: number;
  totalAmount: number;
}) => {
  return (
    <tr>
      <th scope="row">{no}1</th>
      <td>{name}</td>
      <td>{qty}</td>
      <td>&#8377;{unitPrice}</td>
      <td>&#8377;{totalAmount}</td>
    </tr>
  );
};

const Invoice = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  dispatch(makeCartEmpty());

  const { orderDetails, loading }: ICounterState_Order = useSelector(
    (state: any) => state.order
  );

  const {
    orderItems,
    _id,
    email,
    customer,
    createdAt,
    status,
    phone,
    deliverycharge,
    total,
    subtotal,
  } = orderDetails as IOrderData_DB;

  const { refreshToken, userInfo }: ICounterState = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    !refreshToken && !userInfo && router.push("/login");
  }, [refreshToken, router, userInfo]);

  return (
    <div className="card" style={{ marginBottom: "5%" }}>
      {loading && <TriangleLoader />}
      <div className="card-body">
        <div className="container mb-5 mt-3">
          <div className="row d-flex align-items-baseline">
            <div className="col-xl-9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                Invoice {">>"} <strong>ID: {_id}</strong>
              </p>
            </div>
            <div className="col-xl-3 float-end ">
              <div className="btn btn-light text-capitalize mx-2 bg-white text-dark">
                <i className="fas fa-print text-primary"></i> Print
              </div>
              <div className="btn btn-light text-capitalize bg-white text-dark">
                <i className="far fa-file-pdf text-danger"></i> Export
              </div>
            </div>
            <hr className="mt-3" />
          </div>

          <div className="container">
            <div className="col-md-12">
              <div className="text-center">
                {/* <i
                  className="fab fa-mdb fa-4x ms-0"
                  style={{ color: "#5d9fc5" }}
                ></i> */}
                <BrandHeading />
                <p className="pt-0">The Class A Interrior Materials</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8">
                <CustomerDetails email={email} name={customer} phone={phone} />
              </div>
              <div className="col-xl-4">
                <p className="text-muted">Invoice</p>
                <InvoiceDetails date={createdAt} id={_id} status={status} />
              </div>
            </div>

            <div className="row my-2 mx-1 justify-content-center">
              <table className="table table-striped table-borderless">
                <thead
                  style={{ backgroundColor: "#3B5D50" }}
                  className="text-white"
                >
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item) => (
                    <ItemDetails
                      key={item.productId}
                      name={item.productData.name}
                      qty={item.quantity}
                      totalAmount={item.productData.amount}
                      unitPrice={item.productData.unitPrice}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <p className="ms-3">
                  Add additional notes and payment information
                </p>
              </div>
              <div className="col-xl-3">
                <ul className="list-unstyled">
                  <li className="text-muted ms-3">
                    <span className="text-black me-4">SubTotal</span>&#8377;
                    {subtotal}
                  </li>
                  <li className="text-muted ms-3 mt-2">
                    <span className="text-black me-4">Delivery </span>
                    &#8377;{deliverycharge}
                  </li>
                </ul>
                <p className="text-black float-start">
                  <span className="text-black me-3"> Total Amount</span>
                  <span style={{ fontSize: "25px" }}>&#8377;{total}</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xl-10">
                <p>Thank you for your purchase</p>
              </div>
              <div className="col-xl-2">
                <button
                  type="button"
                  className="btn btn-primary text-capitalize"
                  style={{ backgroundColor: "#3B5D50" }}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
