import Image from "next/image";
import player from "@/public/player.svg";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-fencing-overall-background lg:flex-row">
        <Image
          className="md:left-[20%] md:w-1/3 md:translate-x-[-1%] md:translate-y-[23%] lg:absolute"
          src={player}
          alt="Fencer"
          width={200}
          height={200}
        />

        <div className="flex h-1/3 w-3/4 flex-col items-center justify-center text-center font-medium text-white md:ml-auto md:mr-60 md:translate-x-[20%]">
          <p className="text-5xl md:text-9xl">404 Error</p>
          <p className="mt-10 text-wrap text-xl md:w-[600px] md:text-3xl">
            Oops! Sorry, we couldn’t find the page you were looking for!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
