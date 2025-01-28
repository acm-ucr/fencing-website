import About from "@/components/About";
import Join from "@/components/Join";
import Landing from "@/components/Landing";
import What from "@/components/What";
import JoinLanding from "@/components/JoinLanding";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Landing />
      <About />
      <What />
      <Join />
      <JoinLanding />
    </div>
  );
};

export default Home;
