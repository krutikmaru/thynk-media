import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Expertise() {
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
      className="flex items-center justify-center space-x-2 bg-neutral-200 dark:bg-brand-dark-purple-secondary dark:shadow-none h-[220px] rounded-lg"
    >
      <FontAwesomeIcon icon={faMedal} />
      <h1 className="bg-gradient-to-r from-[#4586f6] dark:from-white to-[#ff3ad8] dark:to-[#ff3ad8] text-transparent bg-clip-text">
        Expertise
      </h1>
    </motion.div>
  );
}

export default Expertise;
