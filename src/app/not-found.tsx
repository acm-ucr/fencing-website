import React from "react";
import Image from "next/image";
import Fencer from "../../public/404.svg";

const NotFound = () => {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0 -top-24 left-1/3 flex flex-col items-center justify-center text-8xl text-white">
        404 Error
      </div>
      <div className="absolute inset-0 left-1/3 top-24 flex flex-col items-center justify-center text-2xl text-white">
        Oops! Sorry, we couldn't find the page
      </div>
      <div className="absolute inset-0 left-1/3 right-14 top-40 flex flex-col items-center justify-center text-2xl text-white">
        you were looking for!
      </div>
      <div className="absolute inset-0 left-64 right-1/3 top-28 flex flex-col items-center justify-center">
        <Image src={Fencer} alt="404 img" className="" />
      </div>
    </div>
  );
};

export default NotFound;
