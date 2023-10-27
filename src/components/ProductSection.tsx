import ShowProduct from "@/helpers/ShowProduct";
import { IProduct_CLIENT } from "@/interfaces/product.interface";
import Image from "next/image";
import React from "react";

const ProductSection = () => {
  const pageProduct: Array<IProduct_CLIENT> = [
    {
      id: "1",
      imageLink: "/images/product-1.png",
      name: "Nordic Chair",
      price: 50.0,
      width: 310,
    },
    {
      id: "2",
      imageLink: "/images/product-2.png",
      name: "Kruzo Aero Chair",
      price: 78.0,
      width: 310,
    },
    {
      id: "3",
      imageLink: "/images/product-3.png",
      name: "Ergonomic Chair",
      price: 43.0,
      width: 310,
    },
  ];
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
              <a href="shop.html" className="btn">
                Explore
              </a>
            </p>
          </div>
          {pageProduct.map((product: IProduct_CLIENT) => (
            <ShowProduct productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
