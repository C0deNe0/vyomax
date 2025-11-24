import carbonFib from "../public/gallery/img1.png";
import im2 from "../public/gallery/rcVyomax.png";
import im3 from "../public/drone/components2.png";
import drone1 from "../public/drone/img1.png";
import group1 from "../public/gallery/group1.png";
import group2 from "../public/gallery/shivamogha.jpeg";
import group3 from "../public/gallery/img4.png";
import rcPlane1 from "../public/rcPlane/img3.png";
import appi from "../public/gallery/droneFlying.png";
import { GalleryItem } from "../types/gallery";
import rc from "../public/rcPlane/image.png";

export const galleryItems: GalleryItem[] = [
  {
    title: "Technoxian - Delhi",
    src: group1,
    className: " object-contain md:col-span-5  sm:col-span-2",
  },
  {
    title: "RC plane",
    src: rc,
    className: "md:col-span-3 sm:col-span-1 ",
  },
  {
    title: "Drone testing",
    src: appi,
    className: "md:col-span-3 md:row-span-2 sm:col-span-1",
  },
  {
    title: "JNNC third prize",
    src: group3,
    className: " object-contain md:col-span-5 sm:col-span-2 ",
  },
  {
    title: "Workshop",
    src: group2,
    className: " md:col-span-5 sm:col-span-2",
  },
];
