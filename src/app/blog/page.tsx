"use client";
import { SubHeader } from "@/helpers";
import { successOptions } from "@/utils/alerts";
import Image from "next/image";
import Link from "next/link";
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
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-1.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">First Time Home Owner Ideas</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Kristin Watson</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 19, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">How To Keep Your Furniture Clean</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Robert Fox</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 15, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">Small Space Furniture Apartment Ideas</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Kristin Watson</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 12, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-1.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">First Time Home Owner Ideas</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Kristin Watson</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 19, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">How To Keep Your Furniture Clean</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Robert Fox</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 15, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">Small Space Furniture Apartment Ideas</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Kristin Watson</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 12, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-1.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">First Time Home Owner Ideas</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Kristin Watson</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 19, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">How To Keep Your Furniture Clean</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Robert Fox</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 15, 2021</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail">
                  <Image
                    src="/images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link href="#">Small Space Furniture Apartment Ideas</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link href="#">Kristin Watson</Link>
                    </span>{" "}
                    <span>
                      on <Link href="#">Dec 12, 2021</Link>
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
