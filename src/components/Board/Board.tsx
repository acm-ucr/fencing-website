import React from "react";
import BoardCard from "@/components/Board/BoardCard";
import { ITEMS } from "@/data/board";
import Title from "../Title";

function Board() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title text="Meet the Board" />
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
