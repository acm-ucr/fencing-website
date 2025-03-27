"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";
import { motion } from "motion/react";
import Player from "@/public/player.svg";

const Join = () => {
  return (
    <div className="">
      <Title text="Join Us" />
      <motion.div
        className="box"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex w-full flex-row justify-center pl-5">
          <div className="join flex w-[90%] flex-col items-center justify-center sm:flex-row md:flex-row lg:w-4/5">
            <Image
              className="w-4/5 pb-5 sm:w-1/2 sm:pb-0"
              src={Player}
              alt="Fencer silhouette"
            />

            <div className="flex flex-col items-center text-center sm:w-1/2">
              <p className="mb-4 text-3xl font-bold text-white md:text-3xl xl:text-5xl">
                Interested in Joining?
              </p>

              <Link
                className="no-underline"
                href="https://highlanderlink.ucr.edu/organization/fencingatucr"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-md mb-5 w-80 border-2 border-fencing-border-blue bg-fencing-border-blue/30 text-white hover:bg-fencing-border-blue hover:text-white lg:text-2xl"
                >
                  Membership Form
                </Button>
              </Link>
              <Link
                className="no-underline"
                href="https://discord.com/invite/hZ3ze29Rf9"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-md w-80 border-2 border-fencing-border-blue bg-fencing-border-blue/30 text-white hover:bg-fencing-border-blue hover:text-white lg:text-2xl"
                >
                  Discord Server
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 flex h-4/6 flex-col items-center justify-center space-y-7 p-5">
          <div className="mb-5 h-1/6 w-4/5 text-wrap rounded-lg bg-fencing-border-blue/50 px-10 py-3 text-center text-2xl text-white">
            We look forward to seeing you soon! We have practice every Monday
            and Wednesday 8-10PM!
          </div>
          <Image
            className="w-4/5 rounded-lg object-contain"
            height={1000}
            width={1000}
            src="/gallery/gallery_35.webp"
            alt="Practice image"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Join;
