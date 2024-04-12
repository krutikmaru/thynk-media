import React from "react";
import Member from "./Member";
import { teamMembers } from "../../utils/data/team/members";

function Team() {
  return (
    <div className="text-black dark:text-white min-h-screen p-10">
      <div className="relative">
        {teamMembers.map((member) => {
          return (
            <Member
              key={member.name}
              name={member.name}
              image={member.image}
              x={member.animationValues.x}
              y={member.animationValues.y}
              duration={member.animationValues.duration}
              tailwind={member.tailwind}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Team;
