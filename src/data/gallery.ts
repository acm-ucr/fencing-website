type GalleryItem = {
  id: number;
  src: string;
  title: string;
};

const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://picsum.photos/1920/1080", title: "Image 1" },
  { id: 2, src: "https://picsum.photos/1080/1350", title: "Image 2" },
  { id: 3, src: "https://picsum.photos/1800/1920", title: "Image 3" },
  { id: 4, src: "https://picsum.photos/1080/1080", title: "Image 4" },
  { id: 5, src: "https://picsum.photos/1020/720", title: "Image 5" },
  { id: 6, src: "https://picsum.photos/1080/1080", title: "Image 6" },
  { id: 7, src: "https://picsum.photos/1080/1350", title: "Image 7" },
  { id: 8, src: "https://picsum.photos/1350/1080", title: "Image 8" },
  { id: 9, src: "https://picsum.photos/1080/1080", title: "Image 9" },
  { id: 10, src: "https://picsum.photos/1080/1350", title: "Image 10" },
  { id: 11, src: "https://picsum.photos/1350/1080", title: "Image 11" },
  { id: 12, src: "https://picsum.photos/1080/1080", title: "Image 12" },
];

export { galleryItems };
export type { GalleryItem };
