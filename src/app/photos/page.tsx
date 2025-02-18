const Photos = () => {
  return (
    <div className="flex items-center justify-center bg-fencing-overall-background p-8">
      <div className="grid w-9/12 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-12 flex h-screen w-full items-end gap-[7.5%] p-[5%]">
          <div className="h-[68%] w-[90%] flex-1 overflow-hidden rounded-2xl bg-[grey]"></div>
          {/* the bigger one ^ */}

          <div className="my-24 h-[50%] w-[90%] flex-1 overflow-hidden rounded-2xl bg-[grey]"></div>
          {/* the smaller one ^ */}
        </div>
      </div>
    </div>
  );
};

export default Photos;
