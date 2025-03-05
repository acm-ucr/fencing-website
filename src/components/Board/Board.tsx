import React from "react";
import BoardCard from "@/components/Board/BoardCard";
import { ITEMS } from "@/data/board";
import Image from "next/image";
import background from "@/public/background.webp";

function Board() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative flex w-full flex-col items-center justify-center p-10 py-44">
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
            Meet the Board
          </div>
        </div>
      </div>
      <div className="grid w-9/12 grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3 lg:gap-y-20">
        {ITEMS.map((item, index) => (
          <BoardCard
            key={index}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
