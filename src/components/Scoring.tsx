import React from "react";
import { ScoringComponent } from "../data/ScoringComponent";
import Score from "../../public/score.svg";
import Image from "next/image";

const Scoring = () => {
  return (
    <div className="bg-[#091422]">
      <div className="flex flex-row items-center justify-center gap-16 text-white">
        <div className="flex items-center">
          <div className="pb-6 pl-10">
            <Image src={Score} alt="Score Pic"></Image>
          </div>
        </div>

        <div className="items-left flex flex-col justify-center">
          <div className="justify-right flex h-20 w-11/12 items-center rounded-lg border-4 border-[#008CFF] bg-[#008CFF33]">
            <p className="items-left flex px-8 text-2xl font-bold text-white">
              Format & Scoring
            </p>
          </div>

          <p className="pt-6 text-2xl text-white">
            {" "}
            Fencers score points by striking opponents on a valid part of their
            body or forcing their opponent off the piste.{" "}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-row pl-10 pr-24 pt-6 text-white">
        {ScoringComponent.map((item, index) => (
          <div key={index} className="flex flex-col pr-24">
            <h2 className="pb-4 text-3xl font-bold underline">
              {item.heading}
            </h2>
            <p className="text-2xl"> {item.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoring;
