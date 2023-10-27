import { IProduct_CLIENT } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowProduct = ({ productData }: { productData: IProduct_CLIENT }) => {
  const { imageLink, name, price, width } = productData;
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <Link className="product-item" href="#">
        <Image
          src={imageLink}
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

        <span className="icon-cross">
          <i
            className="fa-solid fa-plus text-white fs-3"
            style={{ marginTop: "3px" }}
          ></i>
        </span>
      </Link>
    </div>
  );
};

export default ShowProduct;
