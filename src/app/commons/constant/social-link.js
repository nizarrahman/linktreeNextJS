import {
  BsGithub,
  BsInstagram,
  BsDiscord,
  BsYoutube,
  BsTiktok,
} from "react-icons/bs";

const ICONS_SIZE = 20;


export const SOCIAL_LINKS = [
  {
    label: "Github",
    href: "https://github.com/nizarrahman",
    icon: <BsGithub size={ICONS_SIZE} ></BsGithub>,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nizarrrahman.f__",
    icon: <BsInstagram size={ICONS_SIZE} ></BsInstagram>,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/nizarrahman09",
    icon: <BsTiktok size={ICONS_SIZE} ></BsTiktok>,
  },
];
