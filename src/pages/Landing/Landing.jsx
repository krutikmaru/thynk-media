import React from "react";
import Hero from "../../components/Landing/Hero";
import { motion } from "framer-motion";
import Choose from "../../components/Landing/Choose/Choose";
import Testimonials from "../../components/Landing/Testimonials/Testimonials";
import Contact from "../../components/Landing/Contact/Contact";

function Landing() {
  return (
    <motion.div>
      <Hero />
      <Choose />
      <Testimonials />
      <Contact />
    </motion.div>
  );
}

export default Landing;
