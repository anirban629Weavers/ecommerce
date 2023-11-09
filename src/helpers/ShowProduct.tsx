import { IProduct_DB } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { ICounterState } from "@/interfaces/redux.interface";
import { addToCart_local, cartQuantity } from "@/redux/slices/orderSlice";

const ShowProduct = ({
  productData,
  width = 310,
}: {
  productData: IProduct_DB;
  width?: number;
}) => {
  // const { userInfo }: ICounterState = useSelector((state: any) => state.user);

  const dispatch: any = useDispatch();
  // useEffect(() => {
  //   // const addToCartHandler = () =>
  // }, [dispatch, productData]);

  const { imageUrl, name, price, rating } = productData;
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <div className="product-item">
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <Image
            src={imageUrl}
            className="img-fluid product-thumbnail"
            alt=""
            width={width}
            height={100}
          />
          <h3 className="product-title">{name}</h3>
          <strong className="product-price">
            <span>
              <i className="fa-solid fa-indian-rupee-sign me-1"></i>
              {price}
            </span>
          </strong>
          <div className="product-price">
            <span className="">
              <Rating value={rating} />
            </span>
          </div>
        </Link>
        <span
          className="icon-cross"
          onClick={() => dispatch(addToCart_local(productData))}
        >
          <i
            className="fa-solid fa-plus text-white fs-3"
            style={{ marginTop: "3px" }}
          ></i>
        </span>
      </div>
    </div>
  );
};

export default ShowProduct;
