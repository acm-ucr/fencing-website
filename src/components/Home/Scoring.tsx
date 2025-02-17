import React from "react";
import { ScoringComponent } from "../../data/ScoringComponent";
import Score from "../../public/score.svg";
import Image from "next/image";

const Scoring = () => {
  return (
    <div className="bg-[#091422] px-16">
      <div className="flex justify-center gap-16 text-white">
        <div className="flex items-center justify-center">
          <div className="w-80">
            <Image src={Score} alt="Score Pic" />
          </div>
        </div>

        <div className="items-left flex flex-col justify-center">
          <div className="justify-right flex h-20 w-full items-center rounded-lg border-4 border-[#008CFF] bg-[#008CFF33]">
            <p className="items-left flex px-8 text-2xl font-bold text-white">
              Format & Scoring
            </p>
          </div>

          <p className="flex w-full pt-6 text-2xl text-white">
            {" "}
            Fencers score points by striking opponents on a valid part of their
            body or forcing their opponent off the piste.{" "}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-row justify-center gap-16 pt-16 text-white">
        {ScoringComponent.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="pb-4 text-3xl font-bold underline underline-offset-8">
              {item.heading}
            </h2>
            <p className="w-11/12 text-2xl"> {item.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoring;
