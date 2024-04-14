import React from "react";
import Hero from "../../components/Landing/Hero";
import { motion } from "framer-motion";
import Choose from "../../components/Landing/Choose/Choose";
import Testimonials from "../../components/Landing/Testimonials/Testimonials";

function Landing() {
  return (
    <motion.div>
      <Hero />
      <Choose />
      <Testimonials />
    </motion.div>
  );
}

export default Landing;
