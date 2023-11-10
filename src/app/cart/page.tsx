"use client";
import CartItem from "@/components/CartItem";
import { ICounterState_Order } from "@/interfaces/redux.interface";
import { loadCartItems_local } from "@/redux/slices/orderSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch: any = useDispatch();
  const { cartItems }: ICounterState_Order = useSelector(
    (state: any) => state.order
  );

  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [subtotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(loadCartItems_local());
  }, [dispatch]);

  return (
    <div className="untree_co-section before-footer-section">
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

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-black btn-sm btn-block">
                  Update Cart
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-black btn-sm btn-block">
                  Continue Shopping
                </button>
              </div>
            </div>
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
                      &#8377;{subtotal.toPrecision(5)}
                    </strong>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Delivery Charges</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">
                      &#8377;{deliveryCharge.toPrecision(3)}
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
                    <button className="btn btn-black btn-lg py-3 btn-block">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
