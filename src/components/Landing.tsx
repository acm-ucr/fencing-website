import React from "react";

const Landing = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black p-10">
      <div className="text-wrap px-10 py-2 text-center text-3xl font-semibold text-white">
        Fencing Club
      </div>
      <div className="text-3lg text-wrap px-10 text-center italic text-white">
        Unversity of California, Riverside
      </div>
      <div className="text-3lg my-4 text-wrap rounded-3xl border-2 border-[#008CFF] bg-[#008CFF80]/30 px-8 py-1 text-center font-semibold text-white/70">
        Join Now!
      </div>
    </div>
  );
};

export default Landing;
