import Image, { StaticImageData } from "next/image";

interface props {
  position: string;
  name: string;
  email: string;
  image: StaticImageData;
}

const BoardCard = ({ position, name, email, image }: props) => {
  return (
    <div className="text-center text-white">
      <p className="mb-2 text-center text-xl font-bold text-blue-500">
        {position}
      </p>
        <Image
          className="mb-4 block aspect-square rounded-lg object-cover mx-auto"
         src={image}
          alt={`${name} Picture`}
        />
      <p className="text-lg font-semibold">{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default BoardCard;
