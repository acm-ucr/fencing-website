import React from "react";
import Link from "next/link";

const Button = ({color = "bg-vex-black" }) => {
  return (
    <Link
      href={Link}
      className={`${color} text-white`}
    >
      {text}
    </Link>
  );
};

export default Button;
