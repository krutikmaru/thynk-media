import React from "react";
import { motion } from "framer-motion";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

function FloatingNavbar() {
  return (
    <motion.div className="h-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="flex space-x-4 py-2 px-7 backdrop-blur-md rounded-full border-[1px]"
      >
        <NavbarLogo />
        <NavbarLinks />
      </motion.div>
    </motion.div>
  );
}

export default FloatingNavbar;
