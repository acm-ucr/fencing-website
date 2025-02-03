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
      className="inline-block w-[308px] h-[43px] mt-[293px] ml-[61px] rounded-[15px] border-[3px] bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium text-base transition-colors">
      {text}
    </Link>
  );
};

export default Button;
