import React from "react";
import Image from "next/image";
import background from "../../public/background.svg";
import Instagram from "../../public/Instagram.svg";
import mail from "../../public/mail.svg";
import Link from "../../public/Link.svg";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 right-2/3 flex flex-col items-center justify-center space-y-4 text-4xl font-bold text-white">
        <>Fencing club</>
      </div>
      <div className="absolute inset-0 right-2/3 top-20 flex flex-col items-center justify-center text-white">
        <>University of California, Riverside</>
      </div>
      <div className="absolute inset-0 left-3/4 flex flex-col justify-center text-white">
        <>yourname@email.com</>
      </div>
      <div className="absolute inset-0 left-3/4 top-16 flex flex-col justify-center text-white">
        <>discord invite link</>
      </div>
      <div className="absolute inset-0 left-3/4 top-32 flex flex-col justify-center text-white">
        <>@instagram_handle</>
      </div>
      <div className="absolute inset-0 left-2/4 right-12 top-32 flex flex-col items-center justify-center">
        <Image src={Instagram} alt="insta logo" className="" />
      </div>
      <div className="absolute inset-0 left-2/4 right-12 flex flex-col items-center justify-center">
        <Image src={mail} alt="mail logo" className="" />
      </div>
      <div className="absolute inset-0 left-2/4 right-12 top-16 flex flex-col items-center justify-center">
        <Image src={Link} alt="link logo" className="" />
      </div>

      <Image src={background} alt="page background" className="w-full" />
    </div>
  );
};

export default Footer;
