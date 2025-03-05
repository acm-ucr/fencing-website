"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { items } from "@/data/navigation";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative left-0 top-0 z-50 my-5 flex w-full items-center justify-between bg-transparent p-4 px-10 text-white">
      <div className="z-20 cursor-pointer text-2xl font-semibold">
        <Link href="/">Fencing Club</Link>
      </div>
      {/* Normal Nav */}
      <div className="hidden space-x-16 text-lg md:flex">
        {items.map(({ name, link }) => (
          <Link key={name} href={link} passHref>
            <span
              className={`cursor-pointer ${
                pathname === link
                  ? "font-semibold text-blue-500 underline"
                  : "text-white hover:text-gray-400"
              }`}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>
      {/* Hamburger -> Cross */}
      <button
        onClick={handleClick}
        className="pointer-events-auto relative z-20 flex flex-col items-center justify-center md:hidden"
      >
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-2.5 rotate-45 bg-white"
              : "-translate-y-0.5 bg-white"
          }`}
        ></span>
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "bg-white opacity-100"
          }`}
        ></span>
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen
              ? "-translate-y-2.5 -rotate-45 bg-white"
              : "translate-y-0.5 bg-white"
          }`}
        ></span>
      </button>

      <motion.div
        initial="false"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        ref={containerRef}
        className="absolute left-0 top-0 flex h-[40vh] w-full flex-col items-center justify-center bg-fencing-overall-background shadow-lg md:hidden"
        variants={sidebarVariants}
      >
        <motion.ul className="list-none space-y-6 text-2xl text-white">
          {items.map(({ name, link }, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              initial="closed"
              animate="open"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link}
                className={`${
                  pathname === link
                    ? "font-semibold text-blue-500 underline"
                    : "text-white hover:text-gray-400"
                }`}
                onClick={() => {
                  closeMenu();
                }}
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const sidebarVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    y: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const itemVariants = {
  open: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default Navbar;
