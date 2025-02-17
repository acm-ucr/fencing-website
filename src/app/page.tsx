import About from "@/components/Home/Scoring";
import Join from "@/components/Join/Join";
import Landing from "@/components/Home/Landing";
import What from "@/components/Home/What";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-fencing-overall-background">
      <Landing />
      <About />
      <What />
      <Join />
    </div>
  );
};

export default Home;
