import { StaticImageData } from "next/image";

export interface GalleryItem {
  title: string;
  src: StaticImageData;
  className?: string;
}
