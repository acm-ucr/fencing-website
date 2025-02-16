import React from "react";
import Image from "next/image";
import epee from "@/public/epee.svg";
import foil from "@/public/foil.svg";
import sabre from "@/public/sabre.svg";

const Types = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col justify-center pb-32 text-white">
      <div className="mb-10 flex justify-items-center">
        <p className="w-[35%] min-w-[50px] rounded-lg border-[3px] border-blue-600 bg-[#008CFF33] py-3 text-center text-2xl font-bold">
          Types of Fencing Swords
        </p>
      </div>
      <div className="grid grid-rows-3">
        <div className="flex flex-row items-center justify-center">
          <div className="flex h-[75%] w-2/5 items-center justify-center rounded-lg border-2 border-white">
            <p className="text-3xl font-bold">FOIL</p>
          </div>
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <Image src={foil} alt="epee" className="mb-3 w-full" />
            <p className="text-lg">
              The foil is a light thrusting weapon with a maximum weight of 500
              grams. The foil targets the torso, not the arms or legs.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <Image src={epee} alt="epee" className="mb-3 w-full" />
            <p className="text-lg">
              The epee is a thrusting weapon like the foil, but with a maximum
              weight of 775 grams. The entire body is a valid target.{" "}
            </p>
          </div>
          <div className="flex h-[75%] w-2/5 items-center justify-center rounded-lg border-2 border-white">
            <p className="text-3xl font-bold">EPEE</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex h-[75%] w-3/5 items-center justify-center rounded-lg border-2 border-white">
            <p className="text-3xl font-bold">SABRE</p>
          </div>
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <Image src={sabre} alt="epee" className="mb-3 w-full" />
            <p className="text-lg">
              The sabre is a light cutting and thrusting weapon targeting above
              the waist, except the weapon hand. The maximum weight of a sabre
              is 500 grams.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
