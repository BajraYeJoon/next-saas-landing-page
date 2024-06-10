import React, { useState } from "react";

const fields = {
  "Why are you using this product?": "Share your reasons...",
  "What features would you like to see?": "Describe the features...",
  Industry: "Your industry...",
};
const DescriptionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  const options = ["1-6", "10-26", "40+"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex mx-auto min-w-[900px] flex-col max-w-sm md:max-w-md lg:max-w-screen-xl items-center justify-center ">
      <div className="flex flex-col justify-center items-start gap-2 w-full">
        <p className="text-lg font-bold my-5">Step 3</p>

        <h2 className="font-serif text-2xl font-semibold text-gray-300">
          Tell about your business
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-12 w-full my-8 py-2">
        <div className="gap-4 flex flex-col justify-center items-start min-w-[500px]">
          <h2>What is your business size?</h2>
          <div className="relative w-56">
            <input
              className="peer hidden"
              type="checkbox"
              name="select-1"
              id="select-1"
              checked
            />
            <label
              className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-slate-400 peer-checked:ring"
              onClick={toggleDropdown}
            >
              {selectedOption}
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul
              className={`max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-xl transition-all duration-300 absolute w-full ${
                isOpen ? "max-h-56 py-3" : ""
              }`}
            >
              {options.map((option) => (
                <li
                  className="cursor-pointer px-3 py-2 text-sm text-gray-300 bg-slate-600 hover:bg-blue-500 hover:text-white"
                  onClick={() => selectOption(option)}
                  key={option}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mx-auto flex flex-col justify-start items-start gap-4">
          {Object.entries(fields).map(([label, placeholder]) => (
            <div
              key={label}
              className="flex flex-grow flex-col justify-center items-start"
            >
              <label
                htmlFor={label}
                className="mb-2 text-sm font-medium text-white"
              >
                {label}
              </label>
              <input
                type="text"
                id={label}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-2 py-2.5 flex flex-grow"
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent;
