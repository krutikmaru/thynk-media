import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../../utils/data/navbar/links";
import { motion } from "framer-motion";

function NavbarLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="flex space-x-4"
    >
      {links.map((navbarLink) => {
        return (
          <Link
            className=" dark:text-white text-black hover:underline"
            key={navbarLink.to}
            to={navbarLink.to}
          >
            {navbarLink.title}
          </Link>
        );
      })}
    </motion.div>
  );
}

export default NavbarLinks;
