import { MaxWidth } from "@/app/_components/MaxWidth/MaxWidth";
import { navLists } from "@/app/_constants";
import React from "react";
import Link from "next/link";
import { Typography } from "@/app/_components/Typography/Typography";

const Footer = () => {
  return (
    <MaxWidth>
      <footer className="mt-2 md:mt-20 lg:mt-2 px-4 ">
        <div className=" mb-10 flex mx-auto max-w-lg justify-center items-center gap-4 md:gap-10  sm:flex-row sm:text-left">
          {navLists.map((nav, index) => (
            <Link href="/" key={index} className="font-medium text-white">
              {nav}
            </Link>
          ))}
        </div>
        <Typography className="pb-8 pt-0 md:py-10 text-center text-gray-300">
          © 2024 SaaS | All Rights Reserved
        </Typography>
      </footer>
    </MaxWidth>
  );
};

export default Footer;
