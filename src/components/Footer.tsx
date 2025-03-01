import Image from "next/image";
import footer from "@/public/footer.svg";
import Link from "next/link";
import {
  SiInstagram,
  SiGmail,
  SiDiscord,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <div className="relative flex h-auto flex-col items-center justify-center md:h-40 md:flex-row">
      <Image
        src={footer}
        alt="Footer Image"
        className="absolute left-0 top-0 -z-10 h-full w-screen object-cover"
      />

      <div className="absolute left-0 top-0 h-full w-full bg-blue-950 opacity-50" />

      <section className="z-20 flex h-full w-11/12 flex-col items-center justify-center p-4 md:w-10/12 md:flex-row md:justify-between">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <p className="text-4xl font-bold text-white">Fencing Club</p>
          <p className="italic text-white">
            University of California, Riverside
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <Link
            href="ucrfencingclub@gmail.com"
            className="flex items-center gap-2 text-white"
          >
            <SiGmail /> yourname@email.com
          </Link>
          <Link
            href="https://discord.com/invite/hZ3ze29Rf9"
            className="flex items-center gap-2 text-white"
          >
            <SiDiscord />
            Fencing at UCR Discord
          </Link>
          <Link
            href="https://www.instagram.com/fencingatucr/"
            className="flex items-center gap-2 text-white"
          >
            <SiInstagram /> @fencingatucr
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
