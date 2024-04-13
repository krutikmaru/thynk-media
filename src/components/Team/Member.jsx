import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Member({
  name,
  role,
  image,
  x,
  y,
  duration,
  tailwind,
  isDisplay,
  showDetails,
}) {
  const memberTailwind = `w-24 md:w-36 h-24 md:h-36 p-5 flex justify-center items-center rounded-full bg-slate-200 absolute ${
    isDisplay ? "z-[100000]" : "z-[10]"
  } ${tailwind.top} ${
    tailwind.left
  } transform -translate-x-1/2 -translate-y-1/2 cursor-pointer dark:bg-brand-dark-purple-secondary`;

  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
        showDetails(name);
      }}
      className={memberTailwind}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.8 }}
      animate={{
        x, // Define y-axis animation
        y, // Define y-axis animation
        transition: { duration, repeat: Infinity }, // Duration and repeat
      }}
    >
      <img
        src={image}
        alt={name}
        className="object-contain max-w-full max-h-full"
      />
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
            className="absolute px-5 py-2 -bottom-[40%] bg-slate-100 dark:bg-brand-dark-purple-secondary shadow-xl rounded-md border-[1px] border-slate-300 dark:border-neutral-700 text-xs"
          >
            <h1>{name}</h1>
            <h1 className="text-slate-400 dark:text-neutral-500">{role}</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Member;
