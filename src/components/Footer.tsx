import React from "react";
import Image from "next/image";
import evenBetterBackground from "../../public/evenBetterBackground.png";
import Instagram from "../../public/Instagram.svg";
import mail from "../../public/mail.svg";
import Link from "../../public/Link.svg";

const Footer = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src={evenBetterBackground}
          alt="page background"
          className="w-full"
        />
        <div className="-z-5 absolute left-0 top-0 h-full w-full bg-blue-950 opacity-50" />
      </div>
      <div className="absolute inset-0 left-28 right-auto flex flex-col items-center justify-center space-y-4 text-4xl font-bold text-white">
        <>Fencing Club</>
      </div>
      <div className="absolute inset-0 left-28 right-auto top-20 flex flex-col items-center justify-center italic text-white">
        <>University of California, Riverside</>
      </div>
      <div className="absolute inset-0 left-3/4 flex flex-col justify-center text-white">
        <a>yourname@email.com</a>
      </div>
      <div className="absolute inset-0 left-3/4 top-20 flex flex-col justify-center text-white">
        <a>discord invite link</a>
      </div>
      <div className="absolute inset-0 left-3/4 top-40 flex flex-col justify-center text-white">
        <a>@instagram_handle</a>
      </div>
      <div className="absolute inset-0 left-2/4 right-14 top-40 flex flex-col items-center justify-center">
        <Image src={Instagram} alt="insta logo" className="" />
      </div>
      <div className="absolute inset-0 left-2/4 right-14 flex flex-col items-center justify-center">
        <Image src={mail} alt="mail logo" className="" />
      </div>
      <div className="absolute inset-0 left-2/4 right-14 top-20 flex flex-col items-center justify-center">
        <Image src={Link} alt="link logo" className="" />
      </div>
    </div>
  );
};

export default Footer;
