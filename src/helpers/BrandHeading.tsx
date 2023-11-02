import Link from "next/link";
import React from "react";

const BrandHeading = () => {
  return (
    <Link className="navbar-brand" href="/">
      M-Interio<span>.</span>
      <Link href="/product/213">p/1</Link>
    </Link>
  );
};

export default BrandHeading;
