"use client";

import Link from "next/link";
import { useState } from "react";
import { items } from "@/data/navigation";

const Navbar = () => {
  const [active, setActive] = useState("About");

  return (
    <div className="relative left-0 top-0 z-50 my-5 flex w-full items-center justify-between bg-transparent p-4 px-40 text-white">
      <div className="text-2xl font-semibold">Fencing Club</div>
      <div className="flex space-x-16 text-lg">
        {items.map(({ name, link }) => (
          <Link key={name} href={link} passHref>
            <span
              onClick={() => setActive(name)}
              className={`cursor-pointer ${
                active === name
                  ? "font-semibold text-blue-500 underline"
                  : "text-white hover:text-gray-400"
              }`}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
