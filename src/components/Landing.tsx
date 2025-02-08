import React from "react";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center border-4 border-red-500 bg-fencing-overall-background p-10">
      <div className="text-wrap px-10 py-2 text-center text-3xl font-bold text-white">
        Fencing Club
      </div>
      <div className="text-3lg text-wrap px-10 text-center italic text-white/85">
        University of California, Riverside
      </div>
      <button className="text-3lg my-4 text-wrap rounded-3xl border-2 border-fencing-border-blue bg-fencing-overall-background px-8 py-1 text-center font-bold text-white/70">
        Join Now!
      </button>
    </div>
  );
};

export default Landing;
