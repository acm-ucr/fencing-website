import React from "react";
import Link from "next/link";
import { ITEMS } from "@/data/navigation";

const Navigation = () => {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-2 bg-black font-bold">
        {ITEMS.map((item) => (
          <Link
            href={`/${item.page}`}
            className={`${item.col} ${item.cole} row-start-2 flex justify-center text-2xl text-white`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
