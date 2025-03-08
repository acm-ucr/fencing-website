import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import Title from "../Title";

export default function Gallery() {
  return (
    <>
      <Title text="Photos" />

      <div className="mx-auto w-11/12 max-w-[1040px] columns-2 gap-2 space-y-2 pb-10 md:columns-3 md:gap-4 md:space-y-4">
        {galleryItems.map((item, i) => (
          <Image
            key={i}
            src={item.image}
            alt={item.title}
            width={300}
            height={300}
            className="w-full rounded-lg transition-transform duration-300 hover:scale-[101%] md:rounded-2xl"
          />
        ))}
      </div>
    </>
  );
}
