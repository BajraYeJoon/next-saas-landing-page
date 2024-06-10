import React from "react";

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
};

const PricingCard = ({
  title,
  description,
  price,
  duration,
  features,
}: PricingCardProps) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border  shadow border-gray-600 xl:p-8 bg-gray-800 text-white justify-between">
      <div>
        <h3 className="mb-4 text-sl md:text-2xl font-semibold">{title}</h3>
        <p className="font-light text-base md:text-lg text-gray-400">
          {description}
        </p>
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-3xl md:text-5xl font-extrabold">
            {price}
          </span>
          <span className="text-gray-400">{duration}</span>
        </div>
        <ul className="mb-6 md:mb-8 space-y-4 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className=" w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className=" bg-slate-300 hover:bg-primary-700 text-black focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Get started
      </button>
    </div>
  );
};

export default PricingCard;
