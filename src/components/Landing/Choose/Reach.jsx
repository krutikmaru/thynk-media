import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Reach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{
        y: 20,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      className="bg-neutral-200 dark:bg-brand-dark-purple-secondary dark:shadow-none h-[220px] rounded-lg"
    >
      <div className="flex items-center justify-center space-x-2 bg-neutral-200 dark:bg-brand-dark-purple-secondary dark:shadow-none h-[220px] rounded-lg">
        <FontAwesomeIcon icon={faChartLine} />
        <h1 className="bg-gradient-to-r from-[#33c686] dark:from-white to-[#aaff01] dark:to-[#aaff01] text-transparent bg-clip-text">
          Reach
        </h1>
      </div>
    </motion.div>
  );
}

export default Reach;
