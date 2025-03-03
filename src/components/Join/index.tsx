import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Join = () => {
  return (
    <>
      <div className="join flex items-center justify-center space-x-8 p-6">
        <div className="flex-shrink-0">
          <Image
            className="h-48 w-48 object-contain"
            src="/player.svg"
            alt="Fencer silhouette"
            width={192}
            height={192}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-2xl font-bold text-white">
            Interested in Joining?
          </p>
          <Link className="no-underline" href="/">
            <Button
              variant="outline"
              size="lg"
              className="mb-3 w-60 border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Membership Form
            </Button>
          </Link>
          <Link className="no-underline" href="/">
            <Button
              variant="outline"
              size="lg"
              className="w-60 border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Discord Server
            </Button>
          </Link>
        </div>
    <div className="flex h-4/6 flex-col items-center justify-center space-y-7 bg-black p-24">
      <div className="mb-5 h-1/6 w-4/5 text-wrap rounded-lg bg-[#008CFF80]/50 px-10 py-3 text-center text-sm text-white">
        We look forward to seeing you soon! We have practice every Monday and
        Wednesday 8-10PM!
      </div>

      <div className="flex h-4/6 flex-col items-center justify-center p-10">
        <div className="mb-5 h-1/6 w-4/5 rounded-lg bg-[#008CFF80]/50">
          <div className="px-10 py-3 text-center text-sm text-white">
            We look forward to seeing you soon! We have practice every Monday
            and Wednesday 8-10PM!
          </div>
        </div>
        <div className="h-1/2 w-4/5 rounded-lg border-2 border-blue-500 bg-gray-500"></div>
      </div>
    </>
  );
};

export default Join;
