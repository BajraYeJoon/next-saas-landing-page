"use client";

import Heading from "@/app/_components/Heading/Heading";
import React, { useRef } from "react";
import Image from "next/image";
import { Typography } from "@/app/_components/Typography/Typography";
import { testimonials } from "@/app/_constants";
import { MaxWidth } from "@/app/_components/MaxWidth/MaxWidth";

const Testimonial = () => {
  return (
    <MaxWidth>
      <div className="main-container">
        <div className="absolute w-48 h-96 top-10 left-0 z-0 bg-purple-800 filter blur-[180px]"></div>
        <div className="absolute w-48 h-96 top-10 right-20 z-0 bg-[#3d3b8e] filter blur-[180px]"></div>

        <Heading
          title="Testimonials"
          description="Hear what our customers have to say about our platform."
        />

        <section className="relative rounded-2xl bg-gray-900">
          <div className="max-w-screen-xl flex-col gap-4 md:gap-9 md:flex-row px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <div className="grid grid-cols-1   md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-9 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={index}
                  className="max-w-screen-md p-4 mx-auto border-slate-500 rounded-xl border"
                >
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <Typography className="text-base md:text-xl font-medium text-slate-300">
                      {testimonial.quote}
                    </Typography>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <Image
                      className="w-6 h-6 rounded-full"
                      src={testimonial.image}
                      alt="profile picture"
                      height={0}
                      width={0}
                    />
                    <div className="flex items-center divide-x-2 divide-gray-700">
                      <Typography
                        as="h4"
                        className="pr-3 font-medium text-white"
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        as="h5"
                        className="pl-3 text-sm font-light text-gray-400"
                      >
                        {testimonial.role}
                      </Typography>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MaxWidth>
  );
};

export default Testimonial;
