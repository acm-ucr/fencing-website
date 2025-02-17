import React from "react";
import Link from "next/link";
import { ITEMS } from "@/data/navigation";

const Navigation = () => {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-2 font-bold">
        {ITEMS.map((item, index) => (
          <Link
            key={index}
            href={`/${item.page}`}
            className={`${item.col} ${item.cole} row-start-2 flex justify-center text-2xl text-white active:text-[#008BFE] active:underline`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
