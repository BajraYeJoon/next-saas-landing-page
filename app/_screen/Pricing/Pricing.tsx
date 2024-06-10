import Heading from "@/app/_components/Heading/Heading";
import React from "react";
import PricingSection from "@/app/_components/PricingSection/PricingSection";

const Pricing = () => {
  return (
    <div className="main-container">
      <div className="absolute w-48 h-96 top-10 right-0 z-0 bg-purple-800 filter blur-[180px]"></div>

      <Heading
        title="Pricing"
        description="Choose a plan that works best for you."
      />
      <PricingSection />
    </div>
  );
};

export default Pricing;
