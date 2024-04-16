import React from "react";
import { motion } from "framer-motion";
import { useApplicationManager } from "../../contexts/ApplicationContext";

function AboutUs() {
  const { theme } = useApplicationManager();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        y: 20,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      className="p-10 sm:p-20"
    >
      <h1 className="text-6xl sm:text-8xl font-light mb-4 dark:text-neutral-200">
        About Us
      </h1>
      <p className="text-sm sm:text-xl dark:text-neutral-400 dark:font-light">
        Your premier partner in the realm of e-commerce Facebook advertising.
        With a steadfast commitment to excellence, we specialize in crafting
        bespoke ad campaigns that drive tangible results for our clients.
        Harnessing the power of data-driven strategies and creative ingenuity,
        we elevate brands to new heights of success in the digital landscape.
        Trust Thynk media to illuminate your path to profitability and
        prominence in the competitive world of online commerce.
      </p>
      <div className=" h-12 md:h-24 relative flex justify-center items-center mt-10">
        <img
          src={`assets/images/${theme}/logo.png`}
          alt="thynk"
          className="object-contain max-w-full max-h-full"
        />
      </div>
    </motion.div>
  );
}

export default AboutUs;
