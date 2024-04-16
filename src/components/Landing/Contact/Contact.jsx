import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Contact() {
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
      className="text-black dark:text-white px-10 py-20"
    >
      <div>
        <h1 className="text-7xl font-light text-center">Talk With Us</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-20 md:space-x-20 md:space-y-0 my-20">
        <motion.a
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.85 }}
          href="https://www.linkedin.com/company/vmsmediaindia"
          className="w-28 md:w-40 h-28 md:h-40 relative bg-lime-400 rounded-full shadow-linkedin-icon"
        >
          <img
            src={`assets/images/logos/linkedin.png`}
            alt="thynk"
            className="object-contain max-w-full max-h-full"
          />
        </motion.a>
        <motion.a
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.85 }}
          className="w-28 md:w-40 h-28 md:h-40 relative bg-lime-400 rounded-full shadow-instagram-icon"
          href="https://www.instagram.com/thynkmedia.hq"
        >
          <img
            src={`assets/images/logos/instagram.png`}
            alt="thynk"
            className="object-contain max-w-full max-h-full"
          />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Contact;
