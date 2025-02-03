import React from "react";
import Link, { LinkProps } from "next/link";

interface ButtonProps {
  link: string;
  text: string;
}

const Button = ({link, text }: ButtonProps) => {
  return (
    <Link href={link as LinkProps["href"]}}>
      {text}
    </Link>
  );
};

export default Button;
