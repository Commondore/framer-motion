"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Example1 = () => {
  const [posX, setPosx] = useState(0);
  return (
    <div className="max-w-6xl mx-auto py-6">
      <motion.div
        animate={{
          x: posX,
        }}
        className="w-[200px] h-[200px] bg-red-400"
      />
      <button
        onClick={() => setPosx((prev) => prev + 100)}
        className="inline-flex p-3 bg-slate-500 text-white cursor-pointer"
      >
        move right
      </button>
    </div>
  );
};

export default Example1;
