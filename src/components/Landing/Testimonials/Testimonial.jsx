import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonial({ comment, stars, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  const starIconsArray = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      starIconsArray.push(
        <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xl" />
      );
    } else {
      starIconsArray.push(
        <FontAwesomeIcon icon={faStar} className="text-neutral-400 text-xl" />
      );
    }
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 + index * 10 }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{
        y: 20,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      className="w-[400px] bg-neutral-100 dark:bg-brand-dark-purple-secondary shadow-lg p-10 rounded-lg"
    >
      <div className="flex flex-col space-y-4 items-start">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="text-5xl text-black dark:text-white"
        />
        <p>{comment}</p>
      </div>
      <div className="border-t-[1px] border-neutral-300 mt-4 pt-4">
        {starIconsArray}
      </div>
    </motion.div>
  );
}

export default Testimonial;
