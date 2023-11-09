import { IProduct_DB } from "@/interfaces/product.interface";
import Image from "next/image";
import React from "react";

const CartItem = ({
  productData,
  quantity,
}: {
  productData: IProduct_DB;
  quantity: number;
}) => {
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
          <input
            type="text"
            className="form-control text-center quantity-amount"
            value="1"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-black increase" type="button">
              +
            </button>
          </div>
        </div>
      </td>
      <td>${productData.price * quantity}</td>
      <td>
        <a href="#" className="btn btn-black btn-sm">
          X
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
