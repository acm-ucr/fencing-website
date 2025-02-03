import Landing from "@/components/Landing";
import Title from "@/components/Title";
import BoardCard from "@/components/BoardCard";

const page = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Landing />
      <Title text="Meet The Board" />
      <BoardCard name="t" position="TT" email="@" />
    </div>
  );
};

export default page;
