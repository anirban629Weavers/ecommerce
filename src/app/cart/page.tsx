"use client";
import CartItem from "@/components/CartItem";
import TriangleLoader from "@/helpers/TriangleLoader";
import {
  ICartItem_Order_Invoice,
  IOrderData,
} from "@/interfaces/order.interface";
import {
  ICounterState,
  ICounterState_Cart,
} from "@/interfaces/redux.interface";
import { IUser_DB } from "@/interfaces/user.interface";
import { loadCartItems_local } from "@/redux/slices/cartSlice";
import { createOrder } from "@/redux/slices/orderSlice";
import { warningOptions } from "@/utils/alerts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddressButtonTemp from "./AddressButtonTemp";

const Cart = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const { cartItems, totalAmount }: ICounterState_Cart = useSelector(
    (state: any) => state.cart
  );
  const { refreshToken, userInfo }: ICounterState = useSelector(
    (state: any) => state.user
  );
  const { loading }: ICounterState = useSelector((state: any) => state.order);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(loadCartItems_local());
    totalAmount != 0 && totalAmount < 500
      ? setTotal(totalAmount + 50)
      : setTotal(totalAmount);
  }, [dispatch, totalAmount]);

  const handleProceedToPay = () => {
    if (!userInfo && !refreshToken) {
      toast.warning("Login Required", warningOptions);
      router.push("/login");
    } else {
      const { firstname, lastname, email, phone } = userInfo as IUser_DB;
      const orderItems: Array<ICartItem_Order_Invoice> = [];
      cartItems.forEach((item) => {
        orderItems.push({
          productId: item.productId,
          productData: {
            name: item.productData.name,
            unitPrice: item.productData.price,
            amount: item.quantity * item.productData.price,
          },
          quantity: item.quantity,
        });
      });
      const orderDetails: IOrderData = {
        customer: `${firstname} ${lastname}`,
        deliverycharge: totalAmount !== 0 && totalAmount < 500 ? 50 : 0,
        email: email,
        isDelivered: false,
        orderItems,
        phone: phone,
        status: false,
        subtotal: Math.ceil(totalAmount),
        total: Math.ceil(total),
      };
      dispatch(createOrder(orderDetails));
      router.push("/invoice");
    }
  };

  return (
    <div className="untree_co-section before-footer-section">
      {loading && <TriangleLoader />}
      <div className="container">
        {cartItems.length === 0 ? (
          <p className="text-center" style={{ margin: "7%" }}>
            <strong>Your Cart is Empty</strong>
          </p>
        ) : (
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((cartItem) => {
                      return (
                        <CartItem
                          key={cartItem.productId}
                          productData={cartItem.productData}
                          quantity={cartItem.quantity}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        )}
        {cartItems.length !== 0 && (
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6">
                  <Link
                    href={"/shop"}
                    className="btn btn-outline-black btn-sm btn-block"
                  >
                    Continue Shopping
                  </Link>
                </div>
                <div className="col-md-6">
                  <AddressButtonTemp />
                </div>
              </div>
              {userInfo && refreshToken && (
                <div className="row">
                  <div className="col-md-12">
                    <label className="text-black h4" htmlFor="coupon">
                      Coupon
                    </label>
                    <p>Enter your coupon code if you have one.</p>
                  </div>
                  <div className="col-md-8 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control py-3"
                      id="coupon"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-black">Apply Coupon</button>
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        &#8377;{totalAmount.toPrecision(5)}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Delivery Charges</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        &#8377;{totalAmount !== 0 && totalAmount < 500 ? 50 : 0}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        &#8377;{total.toPrecision(5)}
                      </strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className="btn btn-black btn-lg py-3 btn-block"
                        onClick={() => handleProceedToPay()}
                      >
                        Proceed To Buy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
