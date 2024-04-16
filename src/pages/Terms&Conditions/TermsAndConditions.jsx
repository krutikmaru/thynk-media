import React from "react";
import { motion } from "framer-motion";
import termsAndConditionsData from "../../utils/data/terms&conditions/termsAndConditions";

function TermsAndConditions() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      exit={{
        y: 20,
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="max-w-2xl mx-auto px-10 py-8"
    >
      <h2 className="text-2xl font-semibold mb-4 dark:text-neutral-100">
        Thynk Media Terms and Conditions
      </h2>
      {termsAndConditionsData.map((point) => (
        <div key={point.id} className="mb-8">
          <h3 className="text-lg font-medium mb-2 dark:text-neutral-300">
            {point.title}
          </h3>
          <p className="text-gray-700 dark:text-neutral-500">{point.content}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default TermsAndConditions;
