"use client";

import Link from "next/link";
import { items } from "@/data/navigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="relative my-5 flex w-full items-center justify-between bg-transparent p-4 px-40 text-white">
      <div className="text-2xl font-semibold">Fencing Club</div>
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
