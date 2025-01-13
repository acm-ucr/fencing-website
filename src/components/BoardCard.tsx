import React from "react";

interface BoardCardProps {
  position: string;
  name: string;
  email: string;
  image?: string;
}

const BoardCard: React.FC<BoardCardProps> = ({
  position,
  name,
  email,
  image,
}) => {
  return (
    <div className="board-card rounded-lg bg-gray-800 p-4 text-white shadow-lg">
      <h3 className="board-card-title mb-2 text-center text-xl font-bold">
        {position}
      </h3>
      <div className="board-card-image mb-4 flex justify-center">
        <img
          className="h-24 w-24 rounded-full border-2 border-gray-500 object-cover"
          src={image || "placeholder.png"} // Replace with actual placeholder path
          alt={name ? `${name}'s profile` : "Default profile"}
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
