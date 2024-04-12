import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";

function TailoredStrategies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{
        y: 20,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      className="w-full md:w-1/2 h-full p-4 bg-neutral-200 dark:bg-brand-dark-purple-secondary rounded-lg relative overflow-hidden"
    >
      <div className="text-3xl lg:text-xl 3xl:text-3xl font-light">
        Tailored
        <h1 className="font-medium bg-gradient-to-r from-[#FF0022] to-purple-600 text-transparent bg-clip-text">
          Strategies
        </h1>
      </div>
      <FontAwesomeIcon
        icon={faChessKing}
        className="absolute bottom-0 right-0 text-9xl text-neutral-400 dark:text-neutral-900 -rotate-12"
      />
    </motion.div>
  );
}

export default TailoredStrategies;
