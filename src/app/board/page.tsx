import Landing from "@/components/Landing";
import Title from "@/components/Title";
import BoardCard from "@/components/BoardCard";
import { ITEMS } from "@/data/board";

const Page = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center mt-28" >
      <Landing />
      <Title text="Meet The Board" />
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, index) => (
          <BoardCard
            key={index}
            name={item.name}
            position={item.position}
            email={item.email}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
