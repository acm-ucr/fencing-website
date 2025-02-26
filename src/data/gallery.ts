import Gallery1 from "@/public/gallery/gallery_1.jpg";
import Gallery2 from "@/public/gallery/gallery_2.jpg";
import Gallery3 from "@/public/gallery/gallery_3.jpg";
import Gallery4 from "@/public/gallery/gallery_4.jpg";
import Gallery5 from "@/public/gallery/gallery_5.jpg";
import Gallery6 from "@/public/gallery/gallery_6.jpg";
import Gallery7 from "@/public/gallery/gallery_7.jpg";
import Gallery8 from "@/public/gallery/gallery_8.jpg";
import Gallery9 from "@/public/gallery/gallery_9.jpg";
import Gallery10 from "@/public/gallery/gallery_10.jpg";
import Gallery11 from "@/public/gallery/gallery_11.jpg";
import Gallery12 from "@/public/gallery/gallery_12.jpg";
import Gallery13 from "@/public/gallery/gallery_13.jpg";
import Gallery14 from "@/public/gallery/gallery_14.jpg";
import Gallery15 from "@/public/gallery/gallery_15.jpg";
import Gallery16 from "@/public/gallery/gallery_16.jpg";
import Gallery17 from "@/public/gallery/gallery_17.jpg";
import Gallery18 from "@/public/gallery/gallery_18.jpg";
import Gallery19 from "@/public/gallery/gallery_19.jpg";
import Gallery20 from "@/public/gallery/gallery_20.jpg";
import Gallery21 from "@/public/gallery/gallery_21.jpg";
import Gallery22 from "@/public/gallery/gallery_22.jpg";
import Gallery23 from "@/public/gallery/gallery_23.jpg";
import Gallery24 from "@/public/gallery/gallery_24.jpg";
import Gallery25 from "@/public/gallery/gallery_25.jpg";
import Gallery26 from "@/public/gallery/gallery_26.jpg";
import Gallery27 from "@/public/gallery/gallery_27.jpg";
import Gallery28 from "@/public/gallery/gallery_28.jpg";
import Gallery29 from "@/public/gallery/gallery_29.jpg";
import Gallery30 from "@/public/gallery/gallery_30.jpg";
import Gallery31 from "@/public/gallery/gallery_31.jpg";
import Gallery32 from "@/public/gallery/gallery_32.jpg";
import Gallery33 from "@/public/gallery/gallery_33.jpg";
import Gallery34 from "@/public/gallery/gallery_34.jpg";
import Gallery35 from "@/public/gallery/gallery_35.jpg";
import { StaticImageData } from "next/image";

type GalleryItem = {
  image: StaticImageData;
  title: string;
};

const galleryItems: GalleryItem[] = [
  { image: Gallery1, title: "Image 1" },
  { image: Gallery2, title: "Image 2" },
  { image: Gallery3, title: "Image 3" },
  { image: Gallery4, title: "Image 4" },
  { image: Gallery5, title: "Image 5" },
  { image: Gallery6, title: "Image 6" },
  { image: Gallery7, title: "Image 7" },
  { image: Gallery8, title: "Image 8" },
  { image: Gallery9, title: "Image 9" },
  { image: Gallery10, title: "Image 10" },
  { image: Gallery11, title: "Image 11" },
  { image: Gallery12, title: "Image 12" },
  { image: Gallery13, title: "Image 13" },
  { image: Gallery14, title: "Image 14" },
  { image: Gallery15, title: "Image 15" },
  { image: Gallery16, title: "Image 16" },
  { image: Gallery17, title: "Image 17" },
  { image: Gallery18, title: "Image 18" },
  { image: Gallery19, title: "Image 19" },
  { image: Gallery20, title: "Image 20" },
  { image: Gallery21, title: "Image 21" },
  { image: Gallery22, title: "Image 22" },
  { image: Gallery23, title: "Image 23" },
  { image: Gallery24, title: "Image 24" },
  { image: Gallery25, title: "Image 25" },
  { image: Gallery26, title: "Image 26" },
  { image: Gallery27, title: "Image 27" },
  { image: Gallery28, title: "Image 28" },
  { image: Gallery29, title: "Image 29" },
  { image: Gallery30, title: "Image 30" },
  { image: Gallery31, title: "Image 31" },
  { image: Gallery32, title: "Image 32" },
  { image: Gallery33, title: "Image 33" },
  { image: Gallery34, title: "Image 34" },
  { image: Gallery35, title: "Image 35" },
];

export { galleryItems };
export type { GalleryItem };
