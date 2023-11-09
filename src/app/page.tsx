import {
  BlogSection,
  HelpSection,
  HeroSection,
  PopularProductSection,
  ProductSection,
  TestimonialSection,
  WhyChoseUsSection,
} from "@/components";
import React from "react";

const Page = () => {
  
  
  return (
    <>
      <HeroSection />
      <ProductSection />
      <WhyChoseUsSection />
      <HelpSection />
      <PopularProductSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default Page;
