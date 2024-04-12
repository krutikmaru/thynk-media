import React from "react";
import Hero from "../../components/Landing/Hero";
import { motion } from "framer-motion";
import Choose from "../../components/Landing/Choose/Choose";

function Landing() {
  return (
    <motion.div>
      <Hero />
      <Choose />
    </motion.div>
  );
}

export default Landing;
