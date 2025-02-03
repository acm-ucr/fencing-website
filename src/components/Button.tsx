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
      className="ml-4 mt-4 inline-block h-4 w-4 rounded-sm border-spacing-3 bg-[#008CFF33]/20 text-base font-medium text-white transition-colors hover:bg-[#008CFF]"
    >
      {text}
    </Link>
  );
};

export default Button;
