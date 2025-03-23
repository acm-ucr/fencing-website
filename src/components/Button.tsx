import Link from "next/link";

interface props {
  link: string;
  text: string;
}

const Button = ({ link, text }: props) => {
  return (
    <Link
      href={link}
      className="my-4 rounded-3xl border-2 border-fencing-border-blue bg-transparent px-8 py-1 text-2xl font-bold text-white/70 hover:bg-fencing-border-blue hover:text-white"
    >
      {text}
    </Link>
  );
};

export default Button;
