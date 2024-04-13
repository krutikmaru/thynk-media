import React, { useState } from "react";
import { motion } from "framer-motion";
import Member from "./Member";
import { teamMembers } from "../../utils/data/team/members";

function Team() {
  const [displayMember, setDisplayedMember] = useState({
    isDisplay: false,
    memberName: null,
  });

  const showDetails = (name) => {
    if (displayMember.isDisplay && displayMember.memberName === name) {
      hideDetails();
    } else {
      setDisplayedMember({
        isDisplay: true,
        memberName: name,
      });
    }
  };

  const hideDetails = () => {
    setDisplayedMember({
      isDisplay: false,
      memberName: null,
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
        className="relative w-full min-h-screen"
      >
        {teamMembers.map((member) => {
          return (
            <Member
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              x={member.animationValues.x}
              y={member.animationValues.y}
              duration={member.animationValues.duration}
              tailwind={member.tailwind}
              isDisplay={displayMember.memberName === member.name}
              showDetails={showDetails}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Team;
