import About from "@/components/About";
import BoardCard from "@/components/BoardCard";
import Join from "@/components/Join";
import Landing from "@/components/Landing";
import What from "@/components/What";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Landing />
      <About />
      <What />
      <Join />
      <BoardCard
        position="President"
        image="placeholder.png"
        name="John Doe"
        email="johndoe@example.com"
      />
    </div>
  );
};

export default Home;
