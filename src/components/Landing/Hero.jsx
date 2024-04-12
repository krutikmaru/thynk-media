import React from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Glow from "./Glow";
import { scrollToSection } from "../../utils/functions/scrollToSection";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-16 relative z-[10000]">
      <Glow />
      <Introduction />
      <div className="w-full h-44 flex"></div>
    </div>
  );
}

function Introduction() {
  const { theme } = useApplicationManager();
  return (
    <div className="flex flex-col px-10 relative z-[100000]">
      <motion.div
        variants={getAnimationVariants(0.2)}
        initial="initial"
        animate="final"
        exit="exit"
        className="text-5xl sm:text-7xl md:text-7xl lg:text-9xl font-light font-lexend-deca flex flex-col justify-center items-start"
      >
        <span
          className={`text-brand-dark-purple-primary dark:text-white ${
            theme === "dark"
              ? "text-shadow-brand-purple-primary"
              : "text-shadow-white"
          }`}
        >
          Represent Yourself
        </span>
        <span className="bg-gradient-to-r from-[#FF0022] to-purple-600 text-transparent bg-clip-text">
          Everywhere
        </span>
      </motion.div>
      <motion.div
        variants={getAnimationVariants(0.5)}
        initial="initial"
        animate="final"
        exit="exit"
        className="py-10 w-full flex md:justify-center lg:justify-end"
      >
        <p className="w-full sm:w-9/12  text-lg sm:text-xl md:text-3xl lg:text-4xl text-left text-neutral-800 dark:text-gray-400 font-light">
          Crafting Social Success: We Deliver Tailored Strategies to Elevate
          Your Brand's Digital Presence, Driving Engagement and Growth.
        </p>
      </motion.div>
      <motion.div
        variants={getAnimationVariants(0.8)}
        initial="initial"
        animate="final"
        exit="exit"
        className="flex justify-center items-center"
      >
        <button
          onClick={() => scrollToSection("why-choose-us")}
          className="bg-black dark:bg-white dark:text-black text-white flex items-center space-x-2  px-6 py-2 rounded-md outline-fuchsia-400 outline-offset-2"
        >
          <span>Learn More</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </motion.div>
    </div>
  );
}

function getAnimationVariants(delay) {
  return {
    initial: { opacity: 0, y: 20 },
    final: { opacity: 1, y: 0, transition: { delay, duration: 0.8 } },
    exit: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };
}

export default Hero;
