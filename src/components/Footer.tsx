import React from "react";
import Image from "next/image";
import FooterDesign from "../../public/FooterDesign.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={FooterDesign} alt="footer design" className="w-full" />
    </div>
  );
};

export default Footer;
