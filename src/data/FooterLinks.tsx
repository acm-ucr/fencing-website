import { SiInstagram, SiGmail, SiDiscord } from "react-icons/si";

interface footerTypes {
  icon: React.ReactNode;
  link: string;
  text: string;
}

const ITEMS: footerTypes[] = [
  {
    icon: <SiGmail />,
    link: "mailto:ucrfencingclub@gmail.com",
    text: "ucrfencingclub@email.com",
  },
  {
    icon: <SiDiscord />,
    link: "https://discord.com/invite/hZ3ze29Rf9",
    text: "Fencing at UCR Discord",
  },
  {
    icon: <SiInstagram />,
    link: "https://www.instagram.com/fencingatucr/",
    text: "@fencingatucr",
  },
];

export default ITEMS;
