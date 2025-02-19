import Image from "next/image";
import epee from "@/public/epee.svg";
import foil from "@/public/foil.svg";
import sabre from "@/public/sabre.svg";

const TypesMobile = () => {
    return (
        <div className="grid grid-rows-3">
        <div className="flex h-full flex-col items-center justify-center bg-black p-10">
        <div className="mb-10 h-1/6 w-1/2 rounded-2xl bg-[#008CFF80]/20 border-[#008CFF80] border-2">
          <div className="text-wrap px-10 py-3 text-center text-sm text-white">
            Types of Fencing Swords
          </div>
        </div>
        
        <div className="h-3/4 w-1/2 rounded-lg border-2 border-white text-white mb-6">
        <Image src={foil} alt="epee" className="m-3 w-9/10 px-4" />
        <div className = "p-3"><p className = "font-bold">THE FOIL</p> is a light thrusting weapon with a maximum weight of 500 grams. The foil targets the torso, not the arms or legs. 
        </div>
        </div>
        <div className="h-3/4 w-1/2 rounded-lg border-2 border-white text-white mb-6">
        <Image src={epee} alt="epee" className="m-3 w-9/10 px-4" />
        <div className = "p-3"><p className = "font-bold">THE EPEE </p>is a thrusting weapon like the foil, but with a maximum weight of 775 grams. The entire body is a valid target. 
        </div>
        </div>
        <div className="h-3/4 w-1/2 rounded-lg border-2 border-white text-white">
        <Image src={sabre} alt="epee" className="m-3 w-9/10 px-4" />
        <div className = "p-3"> <p className = "font-bold">THE SABRE </p> is a light cutting and thrusting weapon targeting above the waist, except the weapon hand. The maximum weight of a sabre is 500 grams. 
        </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default TypesMobile;