"use client";
import { motion } from "motion/react";

import Photo from "@/public/gallery/gallery_1.webp";
import Image from "next/image";

const What = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex w-5/6 flex-col gap-8 px-4 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="m-0 m-6 mb-6 w-full lg:w-5/12"
        >
          <Image
            src={Photo}
            alt="What We Do"
            className="h-auto w-full rounded-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 65 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="w-full lg:w-7/12"
        >
          <div className="relative">
            <div className="absolute left-0 right-0 top-0 mx-auto w-48 -translate-y-1/2 rounded-xl border-4 border-[#1D70E8] bg-[#082c4f] px-4 py-3 text-center text-xl font-bold text-white md:text-2xl lg:w-64 lg:text-3xl">
              What we do!
            </div>

            <div className="rounded-lg bg-[#0e4377] p-6 pt-12 text-base text-white md:p-8 md:pt-16 md:text-xl lg:p-10 lg:pt-16 lg:text-2xl">
              The UCR Fencing Club is a community for students who are
              passionate about the sport of fencing. Whether you are a beginner
              or an experienced fencer, we provide a welcoming environment for
              everyone to learn, train, and compete. Our practices focus on
              technique, strategy, and conditioning across all three
              disciplines: foil, épée, and sabre. Our practices are at the SRC
              from Mondays 8:30pm - 10:30pm at MPR E and Wednesdays 8:30pm -
              10:30pm at MPR A. Join us to sharpen your skills and make new
              friends!
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default What;
