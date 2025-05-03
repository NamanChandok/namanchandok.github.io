import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="bg-black absolute inset-0 flex items-center justify-center">
      <motion.div
        className="flex border-4 border-[#696969] justify-center"
        initial={{
          gap: "35vw",
          border: "0px solid #696969",
          margin: "0",
        }}
        animate={{
          gap: "0",
          border: "4px solid #696969",
          margin: "1em",
        }}
        transition={{
          duration: 2,
          ease: "anticipate",
          border: { duration: 0.5, delay: 1.5 },
        }}
      >
        <Image
          src="/bg-left.png"
          height={500}
          width={500}
          alt="Background Left"
          className="w-1/2"
        />
        <Image
          src="/bg-right.png"
          height={500}
          width={500}
          alt="Background Right"
          className="w-1/2"
        />
      </motion.div>
    </div>
  );
}
