import Image from "next/image";
import player from "@/public/player.svg";

const NotFound = () => {
  return (
    <div>
      <div className="flex h-screen w-screen items-center bg-gradient-to-b from-blue-950 to-fencing-overall-background p-4">
        <Image
          className="absolute left-0 w-[450px] -translate-x-[-75%] -translate-y-[-22%]"
          src={player}
          alt="Fencer"
        />

        <div className="ml-auto mr-60 text-center font-medium text-white">
          <p className="text-9xl">404 Error</p>
          <p className="mt-10 w-[600px] text-3xl">
            Oops! Sorry, we couldn’t find the page you were looking for!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
