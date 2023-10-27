import {
  TeamSection,
  TestimonialSection,
  WhyChoseUsSection,
} from "@/components";
import { SubHeader } from "@/helpers";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <SubHeader headerName="About Us" />
      <WhyChoseUsSection />
      <TeamSection />
      <TestimonialSection />
    </>
  );
};

export default AboutUs;
