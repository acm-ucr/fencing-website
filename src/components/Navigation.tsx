'use client'

import Link from "next/link";
import { useState } from "react";
import { items } from "@/data/navigation";

const Navbar = () => {
  const [active, setActive] = useState("About");

  return (
    <nav className="flex items-center justify-between p-4 my-5 mx-40 text-white">
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
    </nav>
  );
};

export default Navbar;
