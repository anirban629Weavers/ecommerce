"use client";
import { SubHeader } from "@/helpers";
import { successOptions } from "@/utils/alerts";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Blog = () => {
  return (
    <>
      <SubHeader headerName="Blog" />
      <div className="blog-section">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-1.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">First Time Home Owner Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 19, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Robert Fox</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-1.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">First Time Home Owner Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 19, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Robert Fox</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-1.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">First Time Home Owner Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 19, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Robert Fox</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
