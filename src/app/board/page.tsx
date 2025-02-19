import BoardCard from "@/components/Board/BoardCard";
import { ITEMS } from "@/data/board";

const Page = () => {
  return (
    <div className="flex items-center justify-center bg-fencing-overall-background p-8">
      <div className="grid w-9/12 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
