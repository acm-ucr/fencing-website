"use client";

import Link from "next/link";
import { items } from "@/data/navigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const removeLeadingSlash = (str : string) => str.replace(/^\/+/, '');
  const capitalizeFirstLetter = (str : string) => str.charAt(0).toUpperCase() + str.slice(1);


  return (
    <div className="absolute left-0 top-0 z-50 my-5 flex w-full items-center justify-between bg-transparent p-4 px-40 text-white">
      {pathname}
      <div className="text-2xl font-semibold">Fencing Club</div>
      <div className="flex space-x-16 text-lg">
        {items.map(({ name, link }) => (
          <Link key={name} href={link} passHref>
            <span
              className={`cursor-pointer ${
                capitalizeFirstLetter(removeLeadingSlash(pathname)) === name || (pathname == "/" && name === "About")
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
