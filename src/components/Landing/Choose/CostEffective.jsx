import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useApplicationManager } from "../../../contexts/ApplicationContext";

function CostEffective() {
  const { theme } = useApplicationManager();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{
        y: 20,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      className="w-full lg:w-[33%] relative overflow-hidden rounded-lg bg-neutral-200 dark:bg-brand-dark-purple-secondary dark:shadow-none h-[460px]"
    >
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-3xl 2xl:text-5xl font-light p-10">
        Cost
        <h1 className="font-medium bg-gradient-to-r from-[#0097B2] to-[#7ED957] text-transparent bg-clip-text">
          Effective
        </h1>
      </div>
      <div className="h-80 w-full absolute -bottom-20 flex justify-center items-center">
        <img
          src={`assets/images/${theme}/dollar.png`}
          alt="thynk"
          className="object-contain max-w-full max-h-full"
        />
      </div>
    </motion.div>
  );
}

export default CostEffective;
