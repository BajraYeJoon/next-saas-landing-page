import Button from "@/app/_components/Button/Button";
import { MaxWidth } from "@/app/_components/MaxWidth/MaxWidth";
import React from "react";
import { navLists } from "@/app/_constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <MaxWidth>
      <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
        <Link
          href="/"
          className="flex items-center font-bold text-2xl text-white"
        >
          <span className="mr-2 w-8">SaaS.</span>
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-5 cursor-pointer lg:hidden"
          htmlFor="navbar-open"
        >
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            {navLists.map((item) => (
              <li className="lg:mr-12 text-white" key={item}>
                {item}
              </li>
            ))}
          </ul>

          <Button
            text="Get Started"
            additionalClasses="px-12 whitespace-nowrap"
          />
        </nav>
      </header>
    </MaxWidth>
  );
};

export default Navbar;
