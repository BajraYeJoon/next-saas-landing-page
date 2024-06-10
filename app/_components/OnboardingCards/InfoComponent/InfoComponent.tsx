import React from "react";
import onboard from "@/public/onboard.png";
import Image from "next/image";

const TaskManagementComponent = () => {
  return (
    <section className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="absolute w-48 h-96 top-10 left-0 z-0 bg-purple-800 filter blur-[180px]"></div>
      <div className="absolute w-48 h-96 bottom-10 right-0 z-0 bg-[#3d3b8e] filter blur-[180px]"></div>
      <div className="mr-auto place-self-center lg:col-span-7">
        <p className="text-lg font-bold my-5">Step 1</p>
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          Streamline Your Workflows
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Organize your tasks, collaborate with your team, and achieve your
          goals faster with our task management solution. Designed for
          efficiency and productivity.
        </p>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image
          src={onboard}
          alt="Task Management "
          width={0}
          height={0}
          className="h-96 w-full object-contain 
                
            "
        />
      </div>
    </section>
  );
};

export default TaskManagementComponent;
