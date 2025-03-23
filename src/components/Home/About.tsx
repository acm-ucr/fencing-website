import Landing from "@/components/Home/Landing";
import Scoring from "@/components/Home/Scoring";
import What from "@/components/Home/What";
import Types from "@/components/Home/Types";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-fencing-overall-background">
      <Landing />
      <What />
      <Types />
      <Scoring />
    </div>
  );
};

export default About;
