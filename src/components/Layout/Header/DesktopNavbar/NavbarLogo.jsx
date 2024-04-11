import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useApplicationManager } from "../../../../contexts/ApplicationContext";

function NavbarLogo() {
  const { theme } = useApplicationManager();
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="text-neutral-800 dark:text-white font-bold"
    >
      <Link to={"/"}>
        <div className=" h-4 md:h-6 relative flex justify-center items-center">
          <img
            src={`assets/images/${theme}/logo.png`}
            alt="thynk"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default NavbarLogo;
