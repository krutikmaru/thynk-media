import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useApplicationManager } from "../../contexts/ApplicationContext";

function ServiceContainerSmall({ image, title }) {
  const { theme } = useApplicationManager();
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
      className="relative overflow-hidden flex items-center justify-center text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-brand-dark-purple-secondary dark:shadow-none h-[220px] rounded-lg"
    >
      <h1 className="absolute z-10 bottom-0 py-2 text-sm font-medium">
        {title}
      </h1>
      <img
        className="absolute w-full h-full object-cover"
        src={`assets/images/${theme}/${image}.png`}
        alt="Thynk"
      />
    </motion.div>
  );
}

export default ServiceContainerSmall;
