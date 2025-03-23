"use client";
import Image from "next/image";
import epee from "@/public/epee.svg";
import foil from "@/public/foil.svg";
import sabre from "@/public/sabre.svg";
import { motion } from "motion/react";

const Types = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col justify-center p-20 text-white">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="bg-fencing-border-background-blue mb-10 hidden h-20 w-[40%] min-w-[50px] items-center justify-center justify-items-center rounded-2xl border-4 border-fencing-border-blue py-3 text-center text-3xl font-bold md:flex"
      >
        Types of Fencing Swords
      </motion.div>

      <div className="hidden grid-rows-3 md:grid">
        <div className="flex flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex h-[75%] w-2/5 items-center justify-center rounded-2xl border-2 border-white text-3xl font-bold"
          >
            FOIL
          </motion.div>
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mb-3 w-full"
            >
              <Image src={foil} alt="epee" className="mb-3 w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="text-2xl"
            >
              The foil is a light thrusting weapon with a maximum weight of 500
              grams. The foil targets the torso, not the arms or legs.{" "}
            </motion.div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mb-3 w-full"
            >
              <Image src={epee} alt="epee" className="mb-3 w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="text-2xl"
            >
              The epee is a thrusting weapon like the foil, but with a maximum
              weight of 775 grams. The entire body is a valid target.{" "}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex h-[75%] w-2/5 items-center justify-center rounded-2xl border-2 border-white text-3xl font-bold"
          >
            EPEE
          </motion.div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex h-[75%] w-2/5 items-center justify-center rounded-2xl border-2 border-white text-3xl font-bold"
          >
            SABRE
          </motion.div>
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mb-3 w-full"
            >
              <Image src={sabre} alt="epee" className="mb-3 w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="text-2xl"
            >
              The sabre is a light cutting and thrusting weapon targeting above
              the waist, except the weapon hand. The maximum weight of a sabre
              is 500 grams.{" "}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
