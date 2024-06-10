"use client";

import { motion, Variants } from "framer-motion";
import { Typography } from "../Typography/Typography";

interface InfoSectionProps {
  title: string;
  description: string;
}

const headingAnim: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      damping: 20,
      duration: 0.9,
    },
  },
};

const Heading = ({ title, description }: InfoSectionProps) => (
  <motion.div
    className="flex justify-center flex-col space-y-0 px-4 md:px-8   items-center md:space-y-3"
    initial="offscreen"
    whileInView="onscreen"
    variants={headingAnim}
    viewport={{ once: true, amount: 0.8 }}
  >
    <Typography
      as="h3"
      className="mb-4 text-center text-3xl md:text-5xl lg:text-6xl max-w-3xl font-bold"
    >
      {title}
    </Typography>

    <Typography className="mb-4 sm:mb-6 text-center text-base md:text-lg lg:text-2xl font-normal max-w-2xl text-gray-400">
      {description}
    </Typography>
  </motion.div>
);

export default Heading;
