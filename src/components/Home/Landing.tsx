import React from "react";
import Image from "next/image";
import background from "@/public/background.webp";
import Button from "../Button";

const Landing = () => {
  return (
    <div className="relative flex h-[60vh] w-full flex-col items-center justify-center px-10 pt-10">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={background}
          alt="Fencing Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fencing-overall-background"></div>
      </div>
      <div className="relative z-10 text-center">
        <div className="px-10 py-2 pb-4 text-5xl font-bold text-white">
          Fencing Club
        </div>
        <p className="px-10 pb-5 text-2xl italic text-white/85">
          University of California, Riverside
        </p>
        <Button link="/join" text="Join Now!" />
      </div>
    </div>
  );
};

export default Landing;
