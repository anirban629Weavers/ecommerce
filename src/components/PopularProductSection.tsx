import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularProductSection = () => {
  return (
    <div className="popular-product">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="product-item-sm d-flex">
              <div className="thumbnail">
                <Image
                  src="/images/product-1.png"
                  alt="Image"
                  className="img-fluid"
                  width={1000}
                  height={10000}
                />
              </div>
              <div className="pt-3">
                <h3>Nordic Chair</h3>
                <p>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <p>
                  <Link href="/">Read More</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="product-item-sm d-flex">
              <div className="thumbnail">
                <Image
                  src="/images/product-2.png"
                  alt="Image"
                  className="img-fluid"
                  width={1000}
                  height={10000}
                />
              </div>
              <div className="pt-3">
                <h3>Kruzo Aero Chair</h3>
                <p>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <p>
                  <Link href="/">Read More</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="product-item-sm d-flex">
              <div className="thumbnail">
                <Image
                  src="/images/product-3.png"
                  alt="Image"
                  className="img-fluid"
                  width={1000}
                  height={10000}
                />
              </div>
              <div className="pt-3">
                <h3>Ergonomic Chair</h3>
                <p>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <p>
                  <Link href="/">Read More</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductSection;
