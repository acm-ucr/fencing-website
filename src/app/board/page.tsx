"use client";
import React from "react";
import BoardCard from "@/components/Board/BoardCard";
import { ITEMS } from "@/data/board";
import Title from "@/components/Title";
import { motion } from "motion/react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title text="Meet the Board" />
      <div className="grid w-9/12 grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3 lg:gap-y-20">
        {ITEMS.map(({ name, position, image }, index) => (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <BoardCard
              key={index}
              name={name}
              position={position}
              image={image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
