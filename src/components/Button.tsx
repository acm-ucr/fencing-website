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
<<<<<<< HEAD
      className="m-1 h-full w-1/6 rounded-lg border-2 border-solid border-[#008CFF] bg-[#008CFF33]/20 p-1 text-center text-white hover:bg-[#008CFF]"
=======
      className="ml-4 mt-4 inline-block h-4 w-4 border-spacing-3 rounded-sm bg-[#008CFF33]/20 text-base font-medium text-white transition-colors hover:bg-[#008CFF]"
>>>>>>> 47b423099e2db29ce58188a86f1cbe7bd659bf04
    >
      {text}
    </Link>
  );
};

export default Button;
