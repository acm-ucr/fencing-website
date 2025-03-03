import Image from "next/image";
import player from "@/public/player.svg";

const NotFound = () => {
  return (
    <div className="relative flex h-screen w-screen items-center bg-gradient-to-b from-blue-950 to-fencing-overall-background p-4">
      <Image
        className="absolute bottom-1/4 right-1/2"
        src={player}
        alt="Fencer"
      />

      <div className="ml-auto mr-60 text-center font-medium text-white">
        <p className="text-9xl">404 Error</p>
        <p className="mt-5 text-3xl">Oops! Sorry, we couldn't find the page</p>
        <p className="text-3xl">you were looking for!</p>
      </div>
    </div>
  );
};

export default NotFound;
