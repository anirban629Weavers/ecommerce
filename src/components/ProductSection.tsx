"use client";

import ShowProduct from "@/helpers/ShowProduct";
import TriangleLoader from "@/helpers/TriangleLoader";
import { IProduct_DB } from "@/interfaces/product.interface";
import { ICounterState_Product } from "@/interfaces/redux.interface";
import { resetState } from "@/redux/slices/orderSlice";
import { getAllProducts } from "@/redux/slices/productSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductSection = () => {
  const dispatch: any = useDispatch();
  const { loading, products }: ICounterState_Product = useSelector(
    (state: any) => state.product
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(resetState());
  }, [dispatch]);

  let topThreeProducts: Array<IProduct_DB> = [];
  if (products) {
    for (let i = 0; i < 3; i++) {
      topThreeProducts.push(products[i]);
    }
  } else {
    topThreeProducts = [];
  }

    return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">
              Crafted with excellent material.
            </h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <Link href="/shop" className="btn">
                Explore
              </Link>
            </p>
          </div>
          {(loading && (
              <div className="col-12 col-md-4 col-lg-9 mb-5">
                <TriangleLoader />
              </div>
            ) &&
            !topThreeProducts) ||
          topThreeProducts.length === 0 ? (
            <div className="col-12 col-md-4 col-lg-9 mb-5 text-center">
              Some Unexpected Error Occurred
            </div>
          ) : (
            topThreeProducts.map((product: IProduct_DB) => (
              <ShowProduct productData={product} key={product._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
