import {
  ServiceSection,
  TestimonialSection,
  WhyChoseUsSection2,
} from "@/components";
import { SubHeader } from "@/helpers";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <SubHeader headerName="Services" />
      <WhyChoseUsSection2 />
      <ServiceSection />
      <TestimonialSection />
    </>
  );
};

export default ServicePage;
