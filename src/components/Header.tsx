"use client";
import { BrandHeading } from "@/helpers";
import { counterState } from "@/interfaces/redux.interface";
import { IUser_DB } from "@/interfaces/user.interface";
import { signoutUser } from "@/redux/slices/userSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch: any = useDispatch();
  const pathname = usePathname().split("/")[1];
  const { userInfo, refreshToken }: counterState = useSelector(
    (state: any) => state.user
  );

  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
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
                <Link className="nav-link" href="/service">
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
                    Welcome, {(userInfo as IUser_DB).firstname}
                  </span>
                </li>
                <li>
                  <Link className="nav-link me-4 active" href="/">
                    <span className="me-2">Cart</span>
                    <Image
                      src="images/cart.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
                <li
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(signoutUser());
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
                    <Image
                      src="images/cart.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
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
