"use client";
import { IProduct_DB } from "@/interfaces/product.interface";
import { addToCart_local } from "@/redux/slices/orderSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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

  const addToCartHandler = () => dispatch(addToCart_local(productData));
  if (addToCartTriggered) {
    addToCartHandler();
    setItemCount(itemCount + 1);
    setAddToCartTriggered(false);
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
            <button className="btn btn-outline-black decrease" type="button">
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
        <a href="#" className="btn btn-black btn-sm">
          X
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
