"use client";

import Link from "next/link";
import { useState } from "react";
import { items } from "@/data/navigation";

const Navbar = () => {
  const [active, setActive] = useState("About");

  return (
    //Takes in the link for fencing club and it takes you to the home page.
    <div className="absolute left-0 top-0 z-50 my-5 flex w-full items-center justify-between bg-transparent p-4 px-40 text-white">
      <Link href="/" passHref>
        <span className="cursor-pointer text-2xl font-semibold">
          Fencing Club
        </span>
      </Link>
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
