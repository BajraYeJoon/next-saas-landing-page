import React from "react";
import Heading from "@/app/_components/Heading/Heading";
import { MaxWidth } from "@/app/_components/MaxWidth/MaxWidth";
import { features } from "@/app/_constants";
import Image from "next/image";
import leaf from "@/public/leaf.svg";
import { Typography } from "@/app/_components/Typography/Typography";

const Features = () => {
  return (
    <MaxWidth>
      <div className="main-container">
        <div className="absolute w-48 h-96 top-10 right-0 z-0 bg-purple-800 filter blur-[180px]"></div>
        <div className="absolute w-48 h-96 top-10 left-0 z-0 bg-[#3d3b8e] filter blur-[180px]"></div>

        <Heading
          title="Everything you need"
          description="Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.,"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
          {features.map(({ title, description }, index) => (
            <div
              key={index}
              className="relative mt-6 py-4 mx-auto flex flex-col rounded-xl border border-slate-500 text-gray-300 shadow-md"
            >
              <div className="p-6 gap-4 flex flex-col justify-center items-center">
                <Image
                  src={leaf}
                  alt="leaft"
                  className="w-12 h-12"
                  height={0}
                  width={0}
                />

                <Typography
                  as="h5"
                  className="font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                >
                  {title}
                </Typography>
                <Typography className="font-sans text-center text-base font-light ">
                  {description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Features;
