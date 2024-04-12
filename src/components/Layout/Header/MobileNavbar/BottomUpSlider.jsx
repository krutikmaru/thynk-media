import React from "react";
import { motion } from "framer-motion";
import { useApplicationManager } from "../../../../contexts/ApplicationContext";

function BottomUpSlider({ children }) {
  const { closeMenu } = useApplicationManager();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
      className="w-screen h-screen fixed top-0 bg-[#000000c2] left-0 z-[1000000]"
      onClick={closeMenu}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        exit={{
          y: "100%",
          opacity: 0,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[70vh] absolute bottom-0 left-0 overflow-y-scroll overflow-x-hidden bg-white dark:bg-brand-dark-purple-secondary rounded-t-2xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default BottomUpSlider;
