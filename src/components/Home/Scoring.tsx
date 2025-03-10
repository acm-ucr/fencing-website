import Score from "@/public/score.svg";
import Image from "next/image";
import { ScoringComponent } from "@/data/ScoringComponent";

const Scoring = () => {
  return (
    <div className="bg-[#091422] px-36 pb-20">
      <div className="flex flex-col items-center justify-center gap-10 text-white md:flex-row">
        <div className="flex items-center justify-center md:w-[40%]">
          <div className="w-[80%] md:w-[100%]">
            <Image src={Score} alt="Score Pic" />
          </div>
        </div>

        <div className="items-left order-first flex flex-col justify-center md:order-none">
          <div className="flex h-20 w-full items-center justify-center rounded-2xl border-4 border-[#008CFF] bg-[#008CFF33]">
            <p className="px-8 text-center text-xl font-bold text-white md:text-3xl">
              Format & Scoring
            </p>
          </div>

          <p className="pt-6 text-xl text-white md:text-2xl">
            {" "}
            Fencers score points by striking opponents on a valid part of their
            body or forcing their opponent off the piste.{" "}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center gap-16 pt-16 text-white md:flex-row">
        {ScoringComponent.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="pb-4 text-2xl font-bold underline underline-offset-8 md:text-3xl">
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
