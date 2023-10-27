import React from "react";
import { Triangle } from "react-loader-spinner";

const TriangleLoader = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperClass="row justify-content-center mt-4"
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default TriangleLoader;
