import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavbarLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="text-neutral-800 font-bold"
    >
      <Link to={"/"}>THYNK</Link>
    </motion.div>
  );
}

export default NavbarLogo;
