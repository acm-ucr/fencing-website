import React from "react";
import Button from "@/components/Button";

const Join = () => {
  return (
    <div className="flex flex-col">
      Join us
      <Button link="http://localhost:3000/" text="Membership Form"></Button>
      <Button link="http://localhost:3000/" text="Discord Server"></Button>
    </div>
  );
};

export default Join;
