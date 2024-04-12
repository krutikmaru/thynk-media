import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Creativity() {
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
      className="w-full md:w-1/2 h-full p-4 flex flex-col space-y-4 items-center justify-center bg-neutral-200 dark:bg-brand-dark-purple-secondary rounded-lg relative overflow-hidden"
    >
      <FontAwesomeIcon
        icon={faLightbulb}
        className=" text-9xl text-neutral-400 dark:text-neutral-900"
      />
      <div className="text-lg font-light">Creativity</div>
    </motion.div>
  );
}

export default Creativity;
