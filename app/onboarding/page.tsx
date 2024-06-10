"use client";

import React, { useState } from "react";
import { MaxWidth } from "../_components/MaxWidth/MaxWidth";
import InfoComponent from "../_components/OnboardingCards/InfoComponent/InfoComponent";
import PricingComponent from "../_components/OnboardingCards/PricingComponent/PricingComponent";
import DescriptionComponent from "../_components/OnboardingCards/DescriptionComponent/DescriptionComponent";
import OnBoardingButton from "../_components/OnboardingButton/OnBoardingButton";
import { useRouter } from "next/navigation";

enum FORMSTEPS {
  INFO = 0,
  PRICING = 1,
  DESCRIPTION = 2,
}

const components = {
  [FORMSTEPS.INFO]: InfoComponent,
  [FORMSTEPS.PRICING]: PricingComponent,
  [FORMSTEPS.DESCRIPTION]: DescriptionComponent,
};

const Page = () => {
  const router = useRouter();
  const [formStep, setFormStep] = useState(FORMSTEPS.INFO);

  const onBack = () => {
    if (formStep > FORMSTEPS.INFO) {
      setFormStep((prev) => prev - 1);
    }
  };

  const onNext = () => {
    if (formStep < FORMSTEPS.DESCRIPTION) {
      setFormStep((prev) => prev + 1);
    }
  };

  const actionLabel = () => {
    if (formStep === FORMSTEPS.DESCRIPTION) {
      return "Create";
    }

    return "Next";
  };

  const CurrentComponent = components[formStep];

  const secondaryActionLabel = () => {
    if (formStep === FORMSTEPS.INFO) {
      return undefined;
    }

    return "Back";
  };

  return (
    <MaxWidth>
      <div className="flex flex-col  justify-center items-center gap-8 my-20">
        <CurrentComponent />
        <div className="flex justify-between items-center w-full">
          <OnBoardingButton
            onClick={onBack}
            disabled={formStep === FORMSTEPS.INFO}
            text={secondaryActionLabel()}
          />
          <OnBoardingButton
            onClick={onNext}
            disabled={formStep === FORMSTEPS.DESCRIPTION}
            text={actionLabel()}
          />
        </div>
      </div>
    </MaxWidth>
  );
};

export default Page;
