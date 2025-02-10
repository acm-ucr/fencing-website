import React from "react";
type props = {
  text: string;
};
const Title = ({ text }: props) => {
  return (
    <div className="flex h-screen items-start justify-center pt-32">
      <h1 className="text-4xl font-bold text-white">{text}</h1>
    </div>
  );
};

export default Title;
