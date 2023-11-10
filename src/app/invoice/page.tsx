"use client";

import { BrandHeading } from "@/helpers";
import TriangleLoader from "@/helpers/TriangleLoader";
import { IOrderData_DB } from "@/interfaces/order.interface";
import {
  ICounterState,
  ICounterState_Order,
} from "@/interfaces/redux.interface";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
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

const ItemDetails = () => {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>Pro Package</td>
        <td>4</td>
        <td>$200</td>
        <td>$800</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Web hosting</td>
        <td>1</td>
        <td>$10</td>
        <td>$10</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Consulting</td>
        <td>1 year</td>
        <td>$300</td>
        <td>$300</td>
      </tr>
    </>
  );
};

const Invoice = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const { orderDetails, loading }: ICounterState_Order = useSelector(
    (state: any) => state.order
  );
  const currentOrder = orderDetails as IOrderData_DB;
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
                Invoice {">>"} <strong>ID: {currentOrder._id}</strong>
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
                <CustomerDetails
                  email={currentOrder.email}
                  name={currentOrder.customer}
                  phone={currentOrder.phone}
                />
              </div>
              <div className="col-xl-4">
                <p className="text-muted">Invoice</p>
                <InvoiceDetails
                  date={currentOrder.createdAt}
                  id={currentOrder._id}
                  status={currentOrder.status}
                />
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
                  <ItemDetails />
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
                    <span className="text-black me-4">SubTotal</span>$1110
                  </li>
                  <li className="text-muted ms-3 mt-2">
                    <span className="text-black me-4">Tax(15%)</span>$111
                  </li>
                </ul>
                <p className="text-black float-start">
                  <span className="text-black me-3"> Total Amount</span>
                  <span style={{ fontSize: "25px" }}>$1221</span>
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
