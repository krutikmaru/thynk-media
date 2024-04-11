import React from "react";
import Glow from "../../components/Landing/Glow";
import Hero from "../../components/Landing/Hero";
import { motion } from "framer-motion";

function Landing() {
  return (
    <motion.div>
      <Glow />
      <Hero />
    </motion.div>
  );
}

export default Landing;
