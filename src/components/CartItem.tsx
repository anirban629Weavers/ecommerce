"use client";
import { IProduct_DB } from "@/interfaces/product.interface";
import {
  addToCart_local,
  removeItem,
  removeSingleFromCart_local,
} from "@/redux/slices/cartSlice";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CartItem = ({
  productData,
  quantity,
}: {
  productData: IProduct_DB;
  quantity: number;
}) => {
  const dispatch: any = useDispatch();
  const [itemCount, setItemCount] = useState(quantity);
  const [addToCartTriggered, setAddToCartTriggered] = useState(false);
  const [removeSingleFromCartTriggered, setRemoveSingleFromCartTriggered] =
    useState(false);
  const [removeItemFromCartTriggered, setRemoveItemFromCartTriggered] =
    useState(false);

  const addToCartHandler = () => dispatch(addToCart_local(productData));
  if (addToCartTriggered) {
    addToCartHandler();
    setItemCount(itemCount + 1);
    setAddToCartTriggered(false);
  }

  const removeSingleFromCartHandler = () =>
    dispatch(removeSingleFromCart_local(productData._id));
  if (removeSingleFromCartTriggered) {
    if (quantity === 1) {
      dispatch(
        removeItem({
          id: productData._id,
          quantity: 1,
          price: productData.price,
        })
      );
    } else {
      removeSingleFromCartHandler();
      setItemCount(itemCount - 1);
      setRemoveSingleFromCartTriggered(false);
    }
  }

  const removeItemFromCartHandler = () =>
    dispatch(
      removeItem({ id: productData._id, quantity, price: productData.price })
    );
  if (removeItemFromCartTriggered) {
    removeItemFromCartHandler();
    setItemCount(0);
    setRemoveItemFromCartTriggered(false);
  }

  return (
    <tr>
      <td className="product-thumbnail">
        <Image
          src={productData.imageUrl}
          alt="Image"
          className="img-fluid"
          width={1000}
          height={1000}
        />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">{productData.name}</h2>
      </td>
      <td>&#8377; {productData.price}</td>
      <td>
        <div
          className="input-group mb-3 d-flex align-items-center quantity-container"
          style={{ maxWidth: "120px" }}
        >
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-black decrease"
              type="button"
              onClick={() => {
                setRemoveSingleFromCartTriggered(true);
              }}
            >
              &minus;
            </button>
          </div>
          <span
            className="border px-2 border-secondary text-center quantity-amount"
            placeholder=""
          >
            {itemCount < 10 ? `0${itemCount}` : itemCount}
          </span>
          <div className="input-group-append">
            <button
              className="btn btn-outline-black increase"
              type="button"
              onClick={() => {
                setAddToCartTriggered(true);
              }}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>&#8377; {(productData.price * quantity).toPrecision(5)}</td>
      <td>
        <div
          className="btn btn-black btn-sm"
          onClick={() => {
            setRemoveItemFromCartTriggered(true);
          }}
        >
          <i className="fa-solid fa-trash-can fa-lg"></i>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
