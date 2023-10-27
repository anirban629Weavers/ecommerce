import { productData } from "@/data/products";
import { SubHeader } from "@/helpers";
import ShowProduct from "@/helpers/ShowProduct";
import { IProduct_CLIENT } from "@/interfaces/product.interface";
import React from "react";

const Shop = () => {
  const products: Array<IProduct_CLIENT> = productData;
  return (
    <>
      <SubHeader headerName="Shop" />
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map((product: IProduct_CLIENT) => (
              <ShowProduct productData={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
