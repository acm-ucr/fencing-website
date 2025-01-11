import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-2 bg-black font-bold">
        {/*black background is temp*/}
        <Link
          href="/"
          className="col-start-2 col-end-4 row-start-2 text-2xl text-white"
        >
          Fencing Club
        </Link>
        <Link
          href="/about"
          className="col-start-6 row-start-2 flex justify-center text-2xl text-white"
        >
          About
        </Link>
        <Link
          href="/board"
          className="col-start-7 row-start-2 flex justify-center text-2xl text-white"
        >
          Board
        </Link>
        <Link
          href="/events"
          className="col-start-8 row-start-2 flex justify-center text-2xl text-white"
        >
          Events
        </Link>
        <Link
          href="/join-us"
          className="col-start-9 row-start-2 flex justify-center text-2xl text-white"
        >
          Join us
        </Link>
      </div>
    </>
  );
};

export default Navigation;
