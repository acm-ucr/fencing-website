import React from "react";
import Image from "next/image";
import link from "@/public/Link.svg";

const What = () => {
  return (
    <div>
      <div className="gap-[7.5%] p-20 md:flex md:h-screen md:w-full md:items-end md:p-[5%]">
        <Image
          alt="alttext"
          src={link}
          className="my-12 h-full w-40 w-full flex-1 rounded-2xl bg-[grey] md:my-0 md:h-[68%] md:w-[90%] md:overflow-hidden"
        />
        <div className="h-44 w-72 bg-[#054f8d] p-1 md:relative md:h-[62%] md:w-[10%] md:flex-[1.25] md:rounded-xl">
          <div className="-translate-x-7 -translate-y-1/2 transform rounded-2xl border-4 border-[#0276d7] bg-[#082c4f] py-[3%] md:absolute md:left-[10%] md:top-[0%] md:-translate-x-1/2 md:-translate-y-1/2 md:px-[8%]">
            <h3 className="text-center text-lg font-bold text-white md:text-2xl">
              What we do!
            </h3>
          </div>
          <p className="-mx-5 -my-14 p-10 text-xs text-white md:m-10 md:text-2xl md:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default What;
