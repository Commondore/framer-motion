"use client";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const list = ["Element 1", "Element 2", "Element 3"];

const itemVariants: Variants = {
  visible: (num: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: num,
    },
  }),
  hidden: {
    y: 200,
    opacity: 0,
  },
};

const blockVariants: Variants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: "auto",
  },
};

const Example2 = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="max-w-2xl mx-auto p-5">
      <ul className="grid gap-3">
        {list.map((item, index) => {
          return (
            <motion.li
              initial="hidden"
              animate="visible"
              custom={index * 0.2}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="p-4 bg-slate-300 rounded"
              key={item}
            >
              {item}
            </motion.li>
          );
        })}
      </ul>

      <button
        onClick={() => setIsShow((prev) => !prev)}
        className="inline-flex p-4 bg-slate-500 text-white"
      >
        Toggle buttton
      </button>
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={blockVariants}
            className="bg-slate-200 overflow-hidden"
          >
            <div className="p-10">Some content</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Example2;
