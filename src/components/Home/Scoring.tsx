"use client";
import Score from "@/public/score.svg";
import Image from "next/image";
import { ScoringComponent } from "@/data/ScoringComponent";
import { motion } from "motion/react";

const Scoring = () => {
  return (
    <div className="w-5/6 py-16">
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col items-center justify-center gap-10 text-white md:flex-row">
          <div className="flex items-center justify-center md:w-[40%]">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image src={Score} className="w-4/5 md:w-full" alt="Score Pic" />
            </motion.div>
          </div>

          <div className="items-left order-first flex flex-col justify-center md:order-none">
            <div className="flex h-20 w-full items-center justify-center rounded-2xl border-4 border-fencing-border-blue bg-fencing-title-background-blue px-8 text-center text-xl font-bold text-white md:text-3xl">
              Format & Scoring
            </div>

            <p className="pt-6 text-xl text-white md:text-2xl">
              Fencers score points by striking opponents on a valid part of
              their body or forcing their opponent off the piste.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex w-full flex-col justify-center gap-16 pt-16 text-white md:flex-row">
          {ScoringComponent.map(({ heading, text }, index) => (
            <div key={index} className="flex flex-col">
              <p className="pb-4 text-2xl font-bold underline underline-offset-8 md:text-3xl">
                {heading}
              </p>
              <p className="w-11/12 text-xl md:text-2xl"> {text} </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Scoring;
