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
      className="m-1 h-full w-1/6 rounded-lg border-2 border-solid border-[#008CFF] bg-[#008CFF33]/20 p-1 text-center text-white hover:bg-[#008CFF]"
    >
      {text}
    </Link>
  );
};

export default Button;
