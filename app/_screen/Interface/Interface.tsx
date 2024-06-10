"use client";

import Image from "next/image";
import interfaceimg from "@/public/interface.png";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Heading from "@/app/_components/Heading/Heading";
import { MaxWidth } from "@/app/_components/MaxWidth/MaxWidth";

const Interface = () => {
  return (
    <MaxWidth>
      <div className="main-container">
        <ContainerScroll
          titleComponent={
            <Heading
              title="Intuitive Interface"
              description="Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time."
            />
          }
        >
          <Image
            src={interfaceimg}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </MaxWidth>
  );
};

export default Interface;
