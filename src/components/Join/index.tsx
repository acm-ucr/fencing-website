"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import { motion } from "motion/react";

const Join = () => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Title text="Join Us" />
        <div className="join flex items-center justify-center space-x-14 p-6">
          <div className="flex-shrink-0">
            <Image
              className="h-70 w-80 object-contain"
              src="/player.svg"
              alt="Fencer silhouette"
              width={192}
              height={192}
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="mb-4 text-3xl font-bold text-white">
              Interested in Joining?
            </p>
            <Link className="no-underline" href="/">
              <Button
                variant="outline"
                size="lg"
                className="text-md mb-5 w-80 border-2 border-blue-500 bg-blue-500/30 text-white hover:bg-blue-500 hover:text-white"
              >
                Membership Form
              </Button>
            </Link>
            <Link className="no-underline" href="/">
              <Button
                variant="outline"
                size="lg"
                className="text-md w-80 border-2 border-blue-500 bg-blue-500/30 text-white hover:bg-blue-500 hover:text-white"
              >
                Discord Server
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex h-4/6 flex-col items-center justify-center space-y-7 p-24">
          <div className="mb-5 h-1/6 w-4/5 text-wrap rounded-lg bg-[#008CFF80]/50 px-10 py-3 text-center text-2xl text-white">
            We look forward to seeing you soon! We have practice every Monday
            and Wednesday 8-10PM!
          </div>
          <div className="h-1/2 w-4/5 rounded-lg border-2 border-blue-500 bg-gray-500"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Join;
