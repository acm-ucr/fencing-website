import Image from "next/image";
import epee from "@/public/epee.svg";
import foil from "@/public/foil.svg";
import sabre from "@/public/sabre.svg";

const Types = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col justify-center p-20 pb-32 text-white">
      <div className="mb-10 flex justify-items-center">
        <p className="flex h-20 w-[40%] min-w-[50px] items-center justify-center rounded-2xl border-4 border-blue-600 bg-[#008CFF33] py-3 text-center text-3xl font-bold">
          Types of Fencing Swords
        </p>
      </div>

      <div className="hidden grid-rows-3 md:grid">
        <div className="flex flex-row items-center justify-center">
          <div className="flex h-[75%] w-2/5 items-center justify-center rounded-2xl border-2 border-white">
            <p className="text-3xl font-bold">FOIL</p>
          </div>
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <Image src={foil} alt="epee" className="mb-3 w-full" />
            <p className="text-2xl">
              The foil is a light thrusting weapon with a maximum weight of 500
              grams. The foil targets the torso, not the arms or legs.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <Image src={epee} alt="epee" className="mb-3 w-full" />
            <p className="text-2xl">
              The epee is a thrusting weapon like the foil, but with a maximum
              weight of 775 grams. The entire body is a valid target.{" "}
            </p>
          </div>
          <div className="flex h-[75%] w-2/5 items-center justify-center rounded-2xl border-2 border-white">
            <p className="text-3xl font-bold">EPEE</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex h-[75%] w-3/5 items-center justify-center rounded-2xl border-2 border-white">
            <p className="text-3xl font-bold">SABRE</p>
          </div>
          <div className="mx-2 flex flex-col items-center justify-center p-5">
            <Image src={sabre} alt="epee" className="mb-3 w-full" />
            <p className="text-2xl">
              The sabre is a light cutting and thrusting weapon targeting above
              the waist, except the weapon hand. The maximum weight of a sabre
              is 500 grams.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 md:hidden">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="mb-8 h-1/6 w-4/6 rounded-2xl border-2 border-[#008CFF80] bg-[#008CFF80]/20">
            <div className="py-2 text-center text-xl font-bold text-white">
              Types of Fencing Swords
            </div>
          </div>

          <div className="mb-6 h-3/4 w-4/6 rounded-xl border-2 border-white text-white">
            <Image src={foil} alt="foil" className="m-3 w-5/6 px-4" />
            <div className="p-3">
              <span className="font-bold">THE FOIL</span> is a light thrusting
              weapon with a maximum weight of 500 grams. The foil targets the
              torso, not the arms or legs.
            </div>
          </div>
          <div className="mb-6 h-3/4 w-4/6 rounded-xl border-2 border-white text-white">
            <Image src={epee} alt="epee" className="m-3 w-5/6 px-4" />
            <div className="p-3">
              <span className="font-bold">THE EPEE </span> is a thrusting weapon
              like the foil, but with a maximum weight of 775 grams. The entire
              body is a valid target.
            </div>
          </div>
          <div className="h-3/4 w-4/6 rounded-xl border-2 border-white text-white">
            <Image src={sabre} alt="sabre" className="m-3 w-5/6 px-4" />
            <div className="p-3">
              <span className="font-bold">THE SABRE </span> is a light cutting
              and thrusting weapon targeting above the waist, except the weapon
              hand. The maximum weight of a sabre is 500 grams.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
