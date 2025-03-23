import Link from "next/link";

interface props {
  link: string;
  text: string;
}

const Button = ({ link, text }: props) => {
  return (
    <Link
      href={link}
      className="my-4 rounded-3xl border-2 border-blue-500 bg-transparent px-8 py-1 text-2xl font-bold text-white/70 hover:bg-blue-500 hover:text-white"
    >
      {text}
    </Link>
  );
};

export default Button;
