"use client";
import { BrandHeading } from "@/helpers";
import CartIcon from "@/helpers/CartIcon";
import {
  ICounterState,
  ICounterState_Cart,
} from "@/interfaces/redux.interface";
import { IUser_DB } from "@/interfaces/user.interface";
import { resetState, signoutUser } from "@/redux/slices/userSlice";
import { resetState as resetState_Admin } from "@/redux/slices/adminSlice";
import { cartQuantity } from "@/redux/slices/cartSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch: any = useDispatch();
  const pathname = usePathname().split("/")[1];
  const { userInfo }: ICounterState = useSelector((state: any) => state.user);
  const { cartItemsQuantity }: ICounterState_Cart = useSelector(
    (state: any) => state.cart
  );

  useEffect(() => {
    dispatch(cartQuantity());
  }, [cartItemsQuantity, dispatch]);

  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark sticky-top "
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <BrandHeading />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className={pathname === "" ? "nav-item active" : ""}>
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className={pathname === "shop" ? "nav-item active" : ""}>
                <Link className="nav-link" href="/shop">
                  Shop
                </Link>
              </li>
              <li className={pathname === "about" ? "nav-item active" : ""}>
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li className={pathname === "service" ? "nav-item active" : ""}>
                <Link className="nav-link" href="/service-page">
                  Services
                </Link>
              </li>
              <li className={pathname === "blog" ? "nav-item active" : ""}>
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li>
              <li className={pathname === "contact" ? "nav-item active" : ""}>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {userInfo ? (
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li>
                  <span className="nav-link active">
                    {(userInfo as IUser_DB).isAdmin ? (
                      <>
                        Welcome,{" "}
                        <div
                          className="btn-group cursor-pointer"
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className="bg-transparent text-white"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {(userInfo as IUser_DB).firstname} (Admin){" "}
                            <i className="fa-solid fa-caret-down"></i>
                          </div>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/admin/all-orders"
                              >
                                All Orders
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/admin/all-users"
                              >
                                All Users
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      `Welcome, ${(userInfo as IUser_DB).firstname}`
                    )}
                  </span>
                </li>
                <li>
                  <Link
                    href="/orders"
                    className="me-2 nav-link active "
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <i className="fa-solid fa-basket-shopping fa-xl me-2"></i>
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="nav-link me-4 active" href="/cart">
                    <CartIcon count={cartItemsQuantity.toString()} />
                  </Link>
                </li>
                <li
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(resetState());
                    dispatch(signoutUser());
                    dispatch(resetState_Admin());
                  }}
                >
                  Logout <i className="fa-solid fa-right-from-bracket"></i>
                </li>
              </ul>
            ) : (
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li>
                  <Link className="nav-link active" href="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" href="/signup">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link className="ms-4 nav-link" href="/cart">
                    <CartIcon count={cartItemsQuantity.toString()} />
                    {/* <Image
                      src="images/cart.svg"
                      alt=""
                      width={20}
                      height={20}
                    /> */}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
