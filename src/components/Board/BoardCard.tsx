import Image, { StaticImageData } from "next/image";

interface props {
  position: string;
  name: string;
  image: StaticImageData;
}

const BoardCard = ({ position, name, image }: props) => {
  return (
    <div className="text-center text-white">
      <p className="mb-2 text-center text-xl font-bold text-fencing-border-blue">
        {position}
      </p>
      <Image
        className="mx-auto mb-4 block aspect-square rounded-lg object-cover"
        src={image}
        alt={`${name} Picture`}
      />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default BoardCard;
