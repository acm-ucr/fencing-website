import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Title from "../Title";

const Join = () => {
  return (
    <>
      <Title text="Join Us" />

      <div className="join flex flex-col items-center justify-center space-y-6 p-6 md:flex-row md:space-x-14 md:space-y-0">
        <div className="flex-shrink-0">
          <Image
            className="h-70 w-80 object-contain"
            src="/player.svg"
            alt="Fencer silhouette"
            width={192}
            height={192}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-3xl font-bold text-white">
            Interested in Joining?
          </p>
          <Link className="no-underline" href="/">
            <Button
              variant="outline"
              size="lg"
              className="text-md mb-5 w-80 border-2 border-blue-500 bg-blue-500/30 text-white hover:bg-blue-500 hover:text-white"
            >
              Membership Form
            </Button>
          </Link>
          <Link className="no-underline" href="/">
            <Button
              variant="outline"
              size="lg"
              className="text-md w-80 border-2 border-blue-500 bg-blue-500/30 text-white hover:bg-blue-500 hover:text-white"
            >
              Discord Server
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-7 p-6 md:p-24">
        <div className="mb-5 w-full rounded-lg bg-[#008CFF80]/50 px-10 py-3 text-center text-2xl text-white md:w-4/5">
          We look forward to seeing you soon! We have practice every Monday and
          Wednesday 8-10PM!
        </div>
        <div className="h-1/2 w-full rounded-lg border-2 border-blue-500 bg-gray-500 md:w-4/5"></div>
      </div>
    </>
  );
};

export default Join;
