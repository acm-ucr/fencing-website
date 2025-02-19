import Image, { StaticImageData } from "next/image";

interface props {
  position: string;
  name: string;
  email: string;
  image: StaticImageData;
}

const BoardCard = ({ position, name, email, image }: props) => {
  return (
    <div className="text-center text-white shadow-lg">
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
      <p>{email}</p>
    </div>
  );
};

export default BoardCard;
