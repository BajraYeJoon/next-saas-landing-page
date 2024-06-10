import React from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingSection = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-xs md:max-w-2xl lg:max-w-screen-xl lg:py-16 lg:px-6">
      <div className="space-y-5 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <PricingCard
          title="Free Forever"
          description="Ideal for individuals and small teams getting started."
          price="Free"
          duration=""
          features={[
            "Unlimited tasks and lists",
            "Basic collaboration features",
            "Mobile app access",
            "Limited storage",
          ]}
        />
        <PricingCard
          title="Pro"
          description="Perfect for growing teams needing advanced features."
          price="$7"
          duration="/month"
          features={[
            "Everything in Free Forever",
            "5GB storage",
            "Team member management",
            "Priority support",
          ]}
        />
        <PricingCard
          title="Enterprise"
          description="Best for large organizations with complex workflows."
          price="$29"
          duration="/month"
          features={[
            "Everything in Pro",
            "20GB storage",
            "Customizable dashboards",
            "Advanced security features",
            "Dedicated account manager",
          ]}
        />
      </div>
    </div>
  );
};

export default PricingSection;
