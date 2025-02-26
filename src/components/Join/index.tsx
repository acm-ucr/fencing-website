import Image from "next/image";

const Join = () => {
  return (
    <>
      <div className="join flex items-center bg-gray-800 p-4 text-white shadow-lg">
        <div className="join-image mr-6">
          <Image
            className="h-40 w-40 rounded-lg object-cover"
            src="/player.svg"
            alt="Fencer silhouette"
          />
        </div>
        <div className="join-content flex-grow">
          <h3 className="join-title mb-2 text-center text-xl font-bold text-blue-500">
            Interested in Joining?
          </h3>
          <div className="join-content flex-grow">
            <a
              href="/membership-form"
              className="join-button mb-2 block rounded-lg border border-blue-500 bg-transparent px-4 py-2 text-blue-500 transition hover:bg-blue-500 hover:text-white"
            >
              Membership Form
            </a>
            <a
              href="/discord"
              className="join-button block rounded-lg border border-blue-500 bg-transparent px-4 py-2 text-blue-500 transition hover:bg-blue-500 hover:text-white"
            >
              Discord Server
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-4/6 flex-col items-center justify-center bg-black p-10">
        <div className="mb-5 h-1/6 w-4/5 rounded-lg bg-[#008CFF80]/50">
          <div className="text-wrap px-10 py-3 text-center text-sm text-white">
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
