import About from "@/components/Home/About";
import Join from "@/components/Join/Join";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-fencing-overall-background">
      <About />
      <Join />
    </div>
  );
};

export default Home;
