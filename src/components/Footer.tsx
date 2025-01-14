import React from "react";
import Image from "next/image";
import background from "../../public/background.svg";
import Instagram from "../../public/Instagram.svg";
import mail from "../../public/mail.svg";
import Link from "../../public/Link.svg";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-4xl font-bold right-2/3 text-white">
        <>Fencing club</>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center top-20 right-2/3 text-white">
        <>University of California, Riverside</>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center left-3/4 text-white">
        <>yourname@email.com</>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center top-16 left-3/4 text-white">
        <>discord invite link</>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center top-32 left-3/4 text-white">
        <>@instagram_handle</>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center top-32 left-2/4 right-12">
        <Image src={Instagram} alt="insta logo" className=""/>

      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center left-2/4 right-12">
        <Image src={mail} alt="mail logo" className="" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center top-16 left-2/4 right-12">
        <Image src={Link} alt="link logo" className="" />
      </div>

      <Image src={background} alt="page background" className="w-full" />

    </div>
  );
};

export default Footer;
