import React from "react";
import { plans } from "@/app/_constants";

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
}

const PricingComponent = () => {
  return (
    <div className="flex relative items-center justify-center max-w-sm md:max-w-md lg:max-w-screen-xl">
      <div className="absolute w-48 h-96 top-2 left-0 z-0 bg-purple-800 filter blur-[180px]"></div>
      <div className="absolute w-48 h-96 bottom-6 right-0 z-0 bg-[#3d3b8e] filter blur-[180px]"></div>
      <div className="flex w-[38rem] flex-col rounded-2xl  px-6 shadow-2xl sm:px-14">
        <p className="text-lg font-bold my-5">Step 2</p>

        <h2 className="font-serif text-2xl font-semibold text-gray-300">
          Choose a trial plan
        </h2>

        <div className="flex w-full flex-col pb-8 pt-4">
          {plans.map(({ id, name, description, price }: Plan) => (
            <div className="relative mb-4" key={id}>
              <input
                className="peer hidden"
                id={id}
                type="radio"
                name="radio"
              />
              <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 peer-checked:border-gray-300 cursor-pointer"></span>
              <label
                className="flex row gap-3 cursor-pointer flex-col rounded-2xl border border-gray-300  p-4 pr-8 sm:pr-16"
                htmlFor={id}
              >
                <span className="mb-2 text-white text-lg font-semibold">
                  {name}
                </span>
                <p className="text-sm">{description}</p>
                <span className="text-lg font-bold">{price}</span>
              </label>
            </div>
          ))}
          <div className="my-4 space-y-3">
            <label className="flex space-x-4">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-6 w-6 shrink-0 accent-gray-900"
              />
              <span id="terms-description" className="text-sm text-gray-600">
                I agree to the{" "}
                <a className="underline" href="#">
                  Terms and Conditions
                </a>
                . Learn about our Privacy Policy and our measures to keep your
                data safe and secure.
              </span>
            </label>
            <label className="flex space-x-4">
              <input
                id="marketing"
                name="marketing"
                type="checkbox"
                className="h-6 w-6 shrink-0 accent-gray-900"
              />
              <span
                id="marketing-description"
                className="text-sm text-gray-600"
              >
                I am interested in receiving updates and occasional marketing
                content.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
