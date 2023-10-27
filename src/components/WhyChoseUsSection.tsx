import Image from "next/image";
import React from "react";

const WhyChoseUsSection = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <Image
                      src="/images/truck.svg"
                      alt="Image"
                      className="img-fluid"
                      width={46}
                      height={1000}
                    />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <Image
                      src="/images/bag.svg"
                      alt="Image"
                      className="img-fluid"
                      width={46}
                      height={1000}
                    />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <Image
                      src="/images/support.svg"
                      alt="Image"
                      className="img-fluid"
                      width={46}
                      height={1000}
                    />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <Image
                      src="/images/return.svg"
                      alt="Image"
                      className="img-fluid"
                      width={46}
                      height={1000}
                    />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <Image
                src="/images/why-choose-us-img.jpg"
                alt="Image"
                className="img-fluid"
                width={1000}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUsSection;
