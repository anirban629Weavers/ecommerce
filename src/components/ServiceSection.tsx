import Image from "next/image";
import React from "react";

const ServiceSection = () => {
  return (
    <div className="product-section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">
              Crafted with excellent material.
            </h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
            </p>
            <p>
              <a href="#" className="btn">
                Explore
              </a>
            </p>
          </div>

          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="#">
              <Image
                src="/images/product-1.png"
                className="img-fluid product-thumbnail"
                alt="img"
                width={1000}
                height={1000}
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>

              <span className="icon-cross">
                <Image
                  src="/images/cross.svg"
                  className="imf-fluid"
                  alt="img"
                  width={20}
                  height={20}
                />
              </span>
            </a>
          </div>

          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="#">
              <Image
                src="/images/product-2.png"
                className="img-fluid product-thumbnail"
                alt="img"
                width={1000}
                height={1000}
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>

              <span className="icon-cross">
                <Image
                  src="/images/cross.svg"
                  className="imf-fluid"
                  alt="img"
                  width={20}
                  height={20}
                />
              </span>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="#">
              <Image
                src="/images/product-3.png"
                className="img-fluid product-thumbnail"
                alt="img"
                width={1000}
                height={1000}
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>

              <span className="icon-cross">
                <Image
                  src="/images/cross.svg"
                  className="imf-fluid"
                  alt="img"
                  width={20}
                  height={20}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
