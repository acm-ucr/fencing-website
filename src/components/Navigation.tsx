"use client";

import Link from "next/link";
import { items } from "@/data/navigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    //Takes in the link for fencing club and it takes you to the home page.
    <div className="relative my-5 flex w-full items-center justify-between bg-transparent p-4 px-40 text-white">
      <Link href="/" passHref>
        <span className="cursor-pointer text-2xl font-semibold">
          Fencing Club
        </span>
      </Link>
      <div className="flex space-x-16 text-lg">
        {items.map(({ name, link }) => (
          <Link
            key={name}
            href={link}
            className={`cursor-pointer ${
              pathname === link
                ? "font-semibold text-blue-500 underline"
                : "text-white hover:text-gray-400"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
