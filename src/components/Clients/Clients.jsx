import React, { useState } from "react";
import { motion } from "framer-motion";
import Client from "./Client";
import { clients } from "../../utils/data/clients/clients";

function Clients() {
  const [displayClient, setDisplayClient] = useState({
    isDisplay: false,
    clientName: null,
  });

  const showDetails = (name) => {
    if (displayClient.isDisplay && displayClient.clientName === name) {
      hideDetails();
    } else {
      setDisplayClient({
        isDisplay: true,
        clientName: name,
      });
    }
  };

  const hideDetails = () => {
    setDisplayClient({
      isDisplay: false,
      clientName: null,
    });
  };

  return (
    <motion.div className="text-black dark:text-white" onClick={hideDetails}>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          y: 20,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className="relative w-full min-h-screen pb-24 px-10 lg:px-0 space-y-10 md:space-y-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center overflow-hidden"
      >
        {clients.map((client) => (
          <Client
            key={client.name}
            name={client.name}
            image={client.image}
            isDisplay={displayClient.clientName === client.name}
            showDetails={showDetails}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Clients;
