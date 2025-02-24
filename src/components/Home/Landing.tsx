import React from "react";
import Image from "next/image";
import background from "@/public/background.webp";

const Landing = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center p-10">
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
        <h1 className="px-10 py-2 pb-4 text-5xl font-bold text-white">
          Fencing Club
        </h1>
        <p className="px-10 pb-5 text-2xl italic text-white/85">
          University of California, Riverside
        </p>
        <button className="my-4 rounded-3xl border-2 border-blue-500 bg-transparent px-8 py-1 text-2xl font-bold text-white/70 transition hover:bg-blue-500 hover:text-white">
          Join Now!
        </button>
      </div>
    </div>
  );
};

export default Landing;
