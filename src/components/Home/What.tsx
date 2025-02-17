import React from "react";

const What = () => {
  return (
    <div>
      <div className="mb-12 flex h-screen w-full items-end gap-[7.5%] p-[5%]">
        {/* <Image
          alt="alttext"
          src={link}
          className="h-[68%] w-[90%] flex-1 overflow-hidden rounded-2xl bg-[grey]"
        /> */}

        <div className="h-[68%] w-[90%] flex-1 overflow-hidden rounded-2xl bg-[grey]"></div>
        <div className="relative h-[62%] w-[10%] flex-[1.25] rounded-xl bg-[#054f8d]">
          <div className="absolute left-[10%] top-[0%] -translate-y-1/2 transform rounded-2xl border-4 border-[#0276d7] bg-[#082c4f] px-[8%] py-[3%] md:-translate-x-16 lg:-translate-x-32">
            <h3 className="m-0 text-3xl font-bold text-white">What we do!</h3>
          </div>
          <p className="m-[10%] text-2xl text-white">
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
