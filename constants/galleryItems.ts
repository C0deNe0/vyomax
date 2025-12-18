import carbonFib from "../public/gallery/img1.png";
import im2 from "../public/gallery/rcVyomax.png";
import im3 from "../public/drone/components2.png";
import drone1 from "../public/drone/img1.png";
import group1 from "../public/gallery/group1.png";
import group2 from "../public/gallery/shivamogha.jpeg";
import group3 from "../public/gallery/img4.png";
import rcPlane1 from "../public/rcPlane/img3.png";
import droneParty from "../public/drone/droneParty.png";
import nccday from "../public/images/nccday.png";
import { GalleryItem } from "../types/gallery";
import vyomaxLogo from "../public/images/vyomax.png";
import rc from "../public/rcPlane/image.png";
import prash from "../public/gallery/prash.png";

export const galleryItems: GalleryItem[] = [
  {
    title: "TEAM VYOMAX ",
    description: `Team VyomaX Soaring to New Heights in Aeromodelling and Innovation.`,
    src: vyomaxLogo,
    className: "md:col-span-3 sm:col-span-1 ",
  },
  {
    title: "JNNC – Third Prize",
    description:
      "Proud moment as our team secured third place at JNNC for innovation and technical execution.",
    src: group2,
    className: "object-contain md:col-span-5 sm:col-span-2",
  },
  {
    title: "Technoxian - Delhi",
    description:
      "Our team showcasing the RC and drone projects at Technoxian, Delhi, competing alongside Intenational-level innovators.",
    src: group1,
    className: "object-contain ",
  },
  {
    title: "RC Plane",
    description:
      "A custom-built RC plane designed and assembled by the team, focusing on stability, control, and aerodynamic efficiency.",
    src: rc,
    className: "md:col-span-3 sm:col-span-1",
  },
  {
    title: "Alvas centeral School",
    description:
      "Prithvi and venkatesh bagged third place in young Innovation competition held at puttur.",
    src: droneParty,
    className: "md:col-span-3 md:row-span-2 sm:col-span-1",
  },

  {
    title: "Workshop",
    description:
      "Hands-on workshop session focused on RC aircraft, drones, and practical engineering concepts.",
    src: group3,
    className: "md:col-span-5 sm:col-span-2",
  },
  {
    title: "NCC Day",
    description:
      "Team VyomaX showcasing their aeromodelling projects during the NCC Day celebrations, inspiring cadets with innovation and technology.",
    src: nccday,
    className: " object-cover rotate-90",
  },
  {
    title: "rc-craft workshop",
    description:
      "Team VyomaX conducting an engaging RC workshop, sharing knowledge and skills in aeromodelling with enthusiasts.",
    src: prash,
  },
  {
    title: "",
    src: prash,
    description: "",
  },
];
