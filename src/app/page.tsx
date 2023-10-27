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
  // const dispatch: any = useDispatch();
  // dispatch(resetState());

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
