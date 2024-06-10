"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import message from "@/public/cursor 2.png";
import cursor from "@/public/message 1.png";
import { logos } from "@/app/_constants";
import Button from "@/app/_components/Button/Button";
import { motion } from "framer-motion";
import { Typography } from "@/app/_components/Typography/Typography";

const Hero = () => {
  return (
    <section className="relative bg-image h-[80vh] lg:h-screen">
      <Image
        className="motion-safe:animate-spin-slow
      h-48 w-48 object-contain hidden md:block md:absolute md:top-[12rem] md:left-[36rem] lg:top-[16rem] lg:left-[27rem] animate"
        height={0}
        width={0}
        src={message}
        alt="Hero Image"
      ></Image>
      <Image
        className=" motion-safe:animate-spin-slow
      hidden md:block h-48 w-48 object-contain md:absolute lg:top-[8rem] lg:right-[25rem] md:top-[12rem] md:right-[36rem]"
        height={0}
        width={0}
        src={cursor}
        alt="Hero Image"
      ></Image>
      <div className="overlay-image-2"></div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link
          href="#"
          className="inline-flex gap-3 border border-slate-600 justify-between items-center py-1 px-2 pr-4 mb-7 text-sm text-gray-700  rounded-full  hover:bg-gray-200 "
        >
          <Typography
            as="span"
            className="text-xs md:text-sm font-light text-gray-400"
          >
            Version 2.0 is here
          </Typography>
          <Typography
            as="span"
            className="text-xs md:text-sm font-medium text-gray-200"
          >
            {" "}
            Read More &gt;
          </Typography>
        </Link>
        <motion.h1
          className="my-6 md:my-4 text-7xl font-bold max-w-md mx-auto md:font-extrabold lg:max-w-xl tracking-tight md:text-7xl lg:text-9xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          One Task at a Time
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:my-12 my-8 text-lg font-normal mx-auto max-w-xs lg:text-xl lg:max-w-md text-gray-400"
        >
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </motion.p>
        <Button
          text="Get for free"
          additionalClasses="px-12 md:px-5 mb-2 lg:mb-0"
        />
      </div>

      <div className="mx-auto flex flex-col justify-center items-center md:mt-10 lg:mt-0 py-4 lg:py-0 px-8 gap-6">
        <Typography
          as="h3"
          className="text-lg md:text-2xl  text-center text-slate-200 font-medium tracking-normal "
        >
          Trusted by the world’s most innovative teams
        </Typography>
        <div className="flex gap-6 md:gap-24 items-center justify-center mx-auto my-3">
          {logos.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="object-contain h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-32 "
            ></Image>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
