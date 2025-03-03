import Image, { StaticImageData } from "next/image";

interface props {
  position: string;
  name: string;
  image: StaticImageData;
}

const BoardCard = ({ position, name, image }: props) => {
  return (
    <div className="text-center text-white">
      <p className="mb-2 text-center text-xl font-bold text-blue-500">
        {position}
      </p>
      <div className="mb-4 flex justify-center">
        <Image
          className="aspect-square rounded-lg object-cover"
          src={image}
          alt={`${name} Picture`}
        />
      </div>
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default BoardCard;
