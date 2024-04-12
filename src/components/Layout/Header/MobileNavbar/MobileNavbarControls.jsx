import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useApplicationManager } from "../../../../contexts/ApplicationContext";

function MobileNavbarControls() {
  const { openMenu } = useApplicationManager();

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      onClick={openMenu}
      className="text-black"
    >
      <FontAwesomeIcon
        icon={faEllipsis}
        className="text-2xl text-black dark:text-white"
      />
    </motion.div>
  );
}

export default MobileNavbarControls;
