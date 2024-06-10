"use client";
import Heading from "@/app/_components/Heading/Heading";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import { aboutus } from "@/app/_constants";
import { MaxWidth } from "@/app/_components/MaxWidth/MaxWidth";
import { Typography } from "@/app/_components/Typography/Typography";

const Solution = () => {
  return (
    <MaxWidth>
      <div className="main-container">
        {/* Background blur effect */}
        <div className="absolute w-48 h-96 top-1/2 right-0 z-0 bg-purple-800 filter blur-[180px]"></div>
        <div className="absolute w-48 h-96 top-10 left-20 z-0 bg-[#3d3b8e] filter blur-[180px]"></div>

        <Heading
          title="Why Choose Us?"
          description="Struggling with scattered to-do lists & endless reminders? Ditch the chaos. Our all-in-one platform simplifies your work & life. "
        />

        <div className="mt-6 md:mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:min-w-[1024px]">
          {aboutus.map((about, index) => (
            <WobbleCard
              key={index}
              containerClassName=""
              className="flex flex-col  md:min-w-7xl h-96 overflow-hidden  border border-gray-700 rounded-3xl"
            >
              <div className="h-56 overflow-hidden">
                <Image
                  className="object-cover h-full w-full"
                  src={about.img}
                  alt=""
                />
              </div>
              <div className=" px-6 py-8">
                <Typography
                  as="h2"
                  className="text-left text-balance text-xl lg:text-2xl font-semibold  text-white"
                >
                  {about.title}
                </Typography>
                <Typography className="mt-4 text-left  text-sm text-neutral-200">
                  {about.description}
                </Typography>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Solution;
