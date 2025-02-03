import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="flex h-screen items-start justify-center pt-32">
      <h1 className="text-4xl font-bold text-white">{text}</h1>
    </div>

    // Change text to white once background is added
  );
};

export default Title;
