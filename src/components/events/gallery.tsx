("");
import Image from "next/image";
import { galleryItems } from "@/data/gallery";

export default function Gallery() {
  return (
    <>
      <h1 className="mb-4 text-center text-2xl font-bold md:text-4xl">
        Photos
      </h1>
      <div className="mx-auto w-11/12 max-w-[1040px] columns-2 gap-2 space-y-2 md:columns-3 md:gap-4 md:space-y-4">
        {galleryItems.map((item) => (
          <Image
            src={item.src}
            alt={item.title}
            width={300}
            height={300}
            key={item.id}
            className="w-full rounded-lg transition-transform duration-300 hover:scale-[101%] md:rounded-2xl"
          />
        ))}
      </div>
    </>
  );
}
