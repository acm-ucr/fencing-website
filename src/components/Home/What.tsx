import Photo from "@/public/gallery/gallery_1.webp";
import Image from "next/image";

const What = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[90%] gap-4 px-20">
        <Image src={Photo} alt="What We Do" className="w-1/2" />
        <div className="relative w-4/5">
          <div className="rounded-2xl border-4 border-fencing-border-blue bg-[#082c4f] px-[8%] py-[3%] text-2xl text-white">
            What we do!
          </div>

          <p className="rounded bg-fencing-border-blue p-4 text-xl text-white">
            The UCR Fencing Club is a community for students who are passionate
            about the sport of fencing. Whether you are a beginner or an
            experienced fencer, we provide a welcoming environment for everyone
            to learn, train, and compete. Our practices focus on technique,
            strategy, and conditioning across all three disciplines: foil, épée,
            and sabre. Our practices are at the SRC from Mondays 8:30pm -
            10:30pm at MPR E and Wednesdays 8:30pm - 10:30pm at MPR A. Join us
            to sharpen your skills and make new friends!
          </p>
        </div>
      </div>
      </div>
  );
};

export default What;
