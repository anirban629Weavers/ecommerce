import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubHeader = ({ headerName }: { headerName: string }) => {
  const specifiedPath: string = "Shop" || "Checkout" || "Cart";
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>{headerName}</h1>

              {headerName !== "Shop" && (
                <div>
                  <p className="mb-4">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                  <p>
                    <Link href="/" className="btn btn-secondary me-2">
                      Shop Now
                    </Link>
                    <Link href="/" className="btn btn-white-outline">
                      Explore
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>{" "}
          {headerName !== specifiedPath && (
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <Image
                  src="/images/couch.png"
                  className="img-fluid"
                  alt=""
                  priority
                  width={1000}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
