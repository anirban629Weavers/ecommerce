"use client";
import { SubHeader } from "@/helpers";
import ShowProduct from "@/helpers/ShowProduct";
import TriangleLoader from "@/helpers/TriangleLoader";
import { ICounterState_Product } from "@/interfaces/redux.interface";
import { getAllProducts } from "@/redux/slices/productSlice";
import { resetState } from "@/redux/slices/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const dispatch: any = useDispatch();
  const { loading, products }: ICounterState_Product = useSelector(
    (state: any) => state.product
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(resetState());
  }, [dispatch]);

  return (
    <>
      <SubHeader headerName="Shop" />
      {loading && <TriangleLoader />}
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <ShowProduct productData={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
