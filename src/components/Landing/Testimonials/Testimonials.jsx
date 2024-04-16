import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Testimonial from "./Testimonial";
import { testimonials } from "../../../utils/data/testimonials/testimonials";

function Testimonials() {
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
      id="testimonials"
      className="text-black dark:text-white min-h-screen px-10 py-20"
    >
      <div>
        <h1 className="text-7xl font-light text-center">Our Clients Say</h1>
      </div>
      <div className="mt-10 flex items-center space-x-0 lg:space-x-4 space-y-4  flex-wrap justify-evenly">
        {testimonials.map((testimonial, index) => {
          return (
            <Testimonial
              comment={testimonial.comment}
              stars={testimonial.stars}
              index={index + 1}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Testimonials;
