import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function DedicatedSupport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{
        y: 20,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      className="w-full h-52 flex justify-center items-center relative rounded-lg overflow-hidden bg-neutral-200 dark:bg-brand-dark-purple-secondary dark:shadow-none"
    >
      <div className="p-4 text-3xl md:text-5xl lg:text-3xl 3xl:text-5xl font-light ">
        Dedicated
        <h1 className="font-medium bg-gradient-to-r from-[#FF66C4] to-[#FFDE59] text-transparent bg-clip-text">
          Support
        </h1>
      </div>
    </motion.div>
  );
}

export default DedicatedSupport;
