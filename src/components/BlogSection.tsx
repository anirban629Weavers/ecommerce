import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Recent Blog</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <Link href="/" className="more">
              View All Posts
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <Link href="/" className="post-thumbnail">
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
                  <Link href="/">First Time Home Owner Ideas</Link>
                </h3>
                <div className="meta">
                  <span>
                    by <Link href="/">Kristin Watson</Link>
                  </span>
                  <span>
                    on <Link href="/">Dec 19, 2021</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <Link href="/" className="post-thumbnail">
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
                  <Link href="/">How To Keep Your Furniture Clean</Link>
                </h3>
                <div className="meta">
                  <span>
                    by <Link href="/">Robert Fox</Link>
                  </span>
                  <span>
                    on <Link href="/">Dec 15, 2021</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <Link href="/" className="post-thumbnail">
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
                  <Link href="/">Small Space Furniture Apartment Ideas</Link>
                </h3>
                <div className="meta">
                  <span>
                    by <Link href="/">Kristin Watson</Link>
                  </span>
                  <span>
                    on <Link href="/">Dec 12, 2021</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
