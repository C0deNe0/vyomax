import carbonFib from "../public/gallery/img1.png";
import im2 from "../public/drone/components1.png";
import im3 from "../public/drone/components2.png";
import drone1 from "../public/drone/img1.png";
import group1 from "../public/gallery/group1.png";
import group2 from "../public/gallery/group2.png";
import group3 from "../public/gallery/img4.png";
import rcPlane1 from "../public/rcPlane/img3.png";
import appi from "../public/gallery/droneFlying.png";
import { GalleryItem } from "../types/gallery";

export const galleryItems: GalleryItem[] = [
  {
    title: "Technoxian - Delhi",
    src: group1,
    className: "md:col-span-5  sm:col-span-2",
  },
  {
    title: "Component Design",
    src: im2,
    className: "md:col-span-3 sm:col-span-1",
  },
  {
    title: "Aerial Structure",
    src: appi,
    className: "md:col-span-3 md:row-span-2 sm:col-span-1",
  },
  {
    title: "Innovation Flight",
    src: group2,
    className: "md:col-span-5 sm:col-span-2",
  },
  {
    title: "Performance Test",
    src: group3,
    className: "md:col-span-5 sm:col-span-2",
  },
  
];
