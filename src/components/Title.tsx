type props = {
  text: string;
};
const Title = ({ text }: props) => {
  return (
    <div className="flex h-screen items-start justify-center pt-32">
      <div className="text-4xl font-bold text-white">{text}</div>
    </div>
  );
};

export default Title;
