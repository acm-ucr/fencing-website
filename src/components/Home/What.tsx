import Photo from "@/public/gallery/gallery_1.webp";
import Image from "next/image";

const What = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[90%] gap-16 px-20 flex-col lg:flex-row">
        <Image src={Photo} alt="What We Do" className="lg:w-1/2 rounded-lg" />
        <div className="relative w-4/5">
          <div className="rounded-2xl border-4 border-fencing-border-blue bg-[#082c4f] px-[8%] py-[3%] text-center text-3xl font-bold text-white">
            What we do!
          </div>

          <p className="mt-5 lg:mt-10 h-3/4 rounded-lg bg-fencing-border-blue/40 p-10 text-2xl text-white w-48 md:w-auto lg:h-max">
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
