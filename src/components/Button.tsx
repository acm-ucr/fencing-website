// import React from "react";
// import Link from "next/link";

// const Button = ({color = "bg-vex-black" }) => {
//   return (
//     <Link
//       href={Link}
//       className={`${color} text-white`}
//     >
//       {text}
//     </Link>
//   );
// };

// export default Button;

import React from "react";
import Link, { LinkProps } from "next/link";

interface ButtonProps {
  link: string;
  text: string;
  color?: string;
}

const Button = ({ color = "bg-vex-black", link, text }: ButtonProps) => {
  return (
    <Link
      href={link as LinkProps["href"]}
      className={`${color} text-white`}
    >
      {text}
    </Link>
  );
};

export default Button;
