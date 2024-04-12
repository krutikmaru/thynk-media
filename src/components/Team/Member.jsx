import React from "react";
import { motion } from "framer-motion";

function Member({ name, image, x, y, duration, tailwind }) {
  const memberTailwind = `w-24 md:w-36 h-24 md:h-36 p-5 flex justify-center items-center rounded-full bg-slate-200 fixed z-10 ${tailwind.top} ${tailwind.left} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer dark:bg-brand-dark-purple-secondary`;

  return (
    <>
      <motion.div
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
      </motion.div>
    </>
  );
}

export default Member;
