import React from "react";
import Image from "next/image";

const Join = () => {
  return (
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
  );
};

export default Join;
