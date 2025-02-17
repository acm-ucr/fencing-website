import React from "react";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-fencing-overall-background p-10">
      <div className="text-wrap px-10 py-2 pb-4 text-center text-5xl font-bold text-white">
        Fencing Club
      </div>
      <div className="text-wrap px-10 pb-5 text-center text-2xl italic text-white/85">
        University of California, Riverside
      </div>
      <button className="my-4 text-wrap rounded-3xl border-2 border-fencing-border-blue bg-fencing-overall-background px-8 py-1 text-center text-2xl font-bold text-white/70">
        Join Now!
      </button>
    </div>
  );
};

export default Landing;
