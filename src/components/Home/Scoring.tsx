import Score from "@/public/score.svg";
import Image from "next/image";
import { ScoringComponent } from "@/data/ScoringComponent";

const Scoring = () => {
  return (
    <div className="bg-[#091422] p-36">
      <div className="flex flex-col items-center md:flex-row justify-center gap-16 text-white">
        <div className="flex items-center justify-center">
          <div className="w-[100%]">
            <Image src={Score} alt="Score Pic" />
          </div>
        </div>

        <div className="items-left flex flex-col justify-center order-first md:order-none">
          <div className="flex h-20 w-full items-center rounded-lg border-4 border-[#008CFF] bg-[#008CFF33]">
            <p className="px-8 text-xl md:text-2xl font-bold text-white text-center md:text-left">
              Format & Scoring
            </p>
          </div>

          <p className="pt-6 text-xl md:text-2xl text-white">
            {" "}
            Fencers score points by striking opponents on a valid part of their
            body or forcing their opponent off the piste.{" "}
          </p>
        </div>
      </div>

      <div className="flex w-full md:flex-row flex-col justify-center gap-16 pt-16 text-white">
        {ScoringComponent.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="pb-4 text-2xl md:text-3xl font-bold underline underline-offset-8">
              {item.heading}
            </p>
            <p className="w-11/12 text-xl md:text-2xl"> {item.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoring;
