import React from "react";
import Link from "next/link";

interface ButtonProps {
  link: string;
  text: string;
}

const Button = ({ link, text }: ButtonProps) => {
  return (
    <Link
      href={link}
      className="ml-[61px] mt-[293px] inline-block h-[43px] w-[308px] rounded-[15px] border-[3px] bg-[#5865F2] text-base font-medium text-white transition-colors hover:bg-[#4752C4]"
    >
      {text}
    </Link>
  );
};

export default Button;
