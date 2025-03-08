import Image from "next/image";
import background from "@/public/background.webp";

type props = {
  text: string;
};
const Title = ({ text }: props) => {
  return (
    <>
      <div
        id="full-title-container"
        className="relative flex w-full flex-col items-center justify-center p-10 py-44"
      >
        <div id="bg-img-container" className="absolute inset-0 opacity-20">
          <Image
            src={background}
            alt="Fencing Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fencing-overall-background"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="px-10 py-2 pb-4 text-5xl font-bold text-white">
            {text}
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
