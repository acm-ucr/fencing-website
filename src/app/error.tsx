"use client";

import Image from "next/image";
import player from "@/public/player.svg";

const Error = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-10 bg-gradient-to-b from-blue-950 to-fencing-overall-background md:flex-row">
      <Image
        className="md:w-1/3"
        src={player}
        alt="Fencer"
        width={200}
        height={200}
      />

      <div className="flex h-1/3 w-3/4 flex-col items-center justify-center text-center font-medium text-white md:w-1/2">
        <p className="text-5xl md:text-9xl">404 Error</p>
        <p className="mt-10 text-wrap text-xl md:w-[600px] md:text-3xl">
          Oops! Sorry, an unexpected error occurred!
        </p>
      </div>
    </div>
  );
};

export default Error;
