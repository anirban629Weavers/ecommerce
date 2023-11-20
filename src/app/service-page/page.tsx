import {
  ServiceSection,
  TestimonialSection,
  WhyChoseUsSection2,
} from "@/components";
import { SubHeader } from "@/helpers";
import React from "react";

const Service = () => {
  return (
    <>
      <SubHeader headerName="Services" />
      <WhyChoseUsSection2 />
      <ServiceSection />
      <TestimonialSection />
    </>
  );
};

export default Service;
