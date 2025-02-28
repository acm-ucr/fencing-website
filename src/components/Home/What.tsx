const What = () => {
  return (
    <div>
      <div className="mb-12 flex h-screen w-full items-end gap-[7.5%] p-36">
        {/* <Image
          alt="alttext"
          src={link}
          className="h-[68%] w-[90%] flex-1 overflow-hidden rounded-2xl bg-[grey]"
        /> */}

        <div className="h-[68%] w-[90%] flex-1 overflow-hidden rounded-2xl bg-[grey]"></div>
        <div className="relative h-[68%] w-[10%] flex-[1.25] rounded-xl bg-[#054f8d]">
          <div className="absolute left-[10%] top-[0%] -translate-y-1/2 transform rounded-2xl border-4 border-[#0276d7] bg-[#082c4f] px-[8%] py-[3%] md:-translate-x-16 lg:-translate-x-32">
            <h3 className="m-0 text-3xl font-bold text-white">What we do!</h3>
          </div>
          <p className="m-[8%] text-2xl text-white">
            The UCR Fencing Club is a community for students who are passionate
            about the sport of fencing. Whether you are a beginner or an
            experienced fencer, we provide a welcoming environment for everyone
            to learn, train, and compete. Our practices focus on technique,
            strategy, and conditioning across all three disciplines: foil, épée,
            and sabre. Our practices are at the SRC from Mondays 8:30pm -
            10:30pm at MPR E and Wednesdays 8:30pm - 10:30pm at MPR A. Join us
            to sharpen your skills and make new friends!
          </p>
        </div>
      </div>
    </div>
  );
};

export default What;
