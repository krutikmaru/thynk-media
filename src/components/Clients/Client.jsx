import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Client({ name, image, isDisplay, showDetails }) {
  const clientTailwind = `w-36 h-36 flex justify-center items-center rounded-full relative bg-slate-200 ${
    isDisplay ? "z-[100000]" : "z-[10]"
  } ${
    isDisplay ? "border-4 border-purple-500" : ""
  } cursor-pointer dark:bg-brand-dark-purple-secondary`;

  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
        showDetails(name);
      }}
      className={clientTailwind}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.8 }}
    >
      <div className="w-full h-full rounded-full overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <AnimatePresence>
        {isDisplay && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.1, ease: "linear" },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              y: -40,
              transition: { duration: 0.1, ease: "linear" },
            }}
            className="absolute min-w-max px-5 py-2 -bottom-[50%] flex flex-col items-center bg-slate-100 dark:bg-brand-dark-purple-secondary shadow-xl rounded-md border-[1px] border-slate-300 dark:border-neutral-700 text-xs"
          >
            <h1>{name}</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Client;
