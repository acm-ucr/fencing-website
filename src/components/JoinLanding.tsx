import React from "react";
// import Image from "next/image";

const JoinLanding = () => {
  return (
    <div className="flex h-4/6 flex-col items-center justify-center bg-black p-10">
      <div className="mb-5 h-1/6 w-4/5 rounded-lg bg-[#008CFF80]/50">
        <div className="text-wrap px-10 py-3 text-center text-sm text-white">
          We look forward to seeing you soon! We have practice every Monday and
          Wednesday 8-10PM!
        </div>
      </div>

      {/* <Image className="h-1/2 w-4/5 rounded-lg" src={""} alt="Image Alt"/> */}
      {/* Use Actual Image once it's uploaded */}
      <div className="h-1/2 w-4/5 rounded-lg border-2 border-blue-500 bg-gray-500"></div>
    </div>
  );
};

export default JoinLanding;
