import React from "react";
import Image, { StaticImageData } from "next/image";

// interface BoardCardProps {
//   position: string;
//   name: string;
//   email: string;
//   image?: string;
// }

const BoardCard = ({
  position,
  name,
  email,
  image,
}: {
  position: string;
  name: string;
  email: string;
  image: StaticImageData;
}) => {
  return (
    <div className="board-card square-lg bg-gray-800 p-4 text-white shadow-lg">
      <h3 className="board-card-title mb-2 text-center text-xl font-bold text-blue-500">
        {position}
      </h3>
      <div className="board-card-image mb-4 flex justify-center">
        <Image
          className="h-40 w-40 rounded-lg object-cover"
          src={image}
          alt="Picture of the author"
        />
      </div>
      <div className="text-center">
        <p className="board-card-name text-lg font-semibold">
          {name || "Unknown Member"}
        </p>
        <p className="board-card-email">{email || "No email provided"}</p>
      </div>
    </div>
  );
};

export default BoardCard;
