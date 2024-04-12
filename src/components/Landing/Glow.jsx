// Glow.jsx
import React from "react";
import { motion } from "framer-motion";

const Glow = () => {
  return (
    <div className="absolute w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
      <div className="w-full h-32 absolute left-0 bottom-0 z-10 bg-gradient-to-t from-white dark:from-brand-dark-purple-primary to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center"
      >
        <GlowLevel1 />
        <GlowLevel2 />
      </motion.div>
    </div>
  );
};

const GlowLevel1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 200 }}
      exit={{
        y: 300,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="dark:bg-brand-dark-purple-primary w-[780px] h-[780px] shadow-ball-level-1 rounded-full absolute top-0"
    ></motion.div>
  );
};

const GlowLevel2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 300 }}
      transition={{ delay: 1, duration: 0.8 }}
      exit={{
        y: 400,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      className="dark:bg-brand-dark-purple-primary w-[760px] h-[760px] shadow-ball-level-2 rounded-full absolute top-0"
    ></motion.div>
  );
};

export default Glow;
