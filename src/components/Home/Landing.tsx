"use client";
import React from "react";
import Image from "next/image";
import background from "@/public/background.webp";
import Button from "../Button";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-44">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={background}
          alt="Fencing Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fencing-overall-background" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="relative z-10 text-center"
      >
        <div className="pb-4 text-5xl font-bold text-white">Fencing Club</div>
        <p className="pb-5 text-2xl italic text-white/85">
          University of California, Riverside
        </p>
        <Button link="/join" text="Join Now!" />
      </motion.div>
    </div>
  );
};

export default Landing;
