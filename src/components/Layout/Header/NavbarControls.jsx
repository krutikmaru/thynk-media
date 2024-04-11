import React from "react";
import { motion } from "framer-motion";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function NavbarControls() {
  const { theme, toggleTheme } = useApplicationManager();
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="cursor-pointer text-neutral-800 text-xl"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </motion.div>
  );
}

export default NavbarControls;
