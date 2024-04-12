import React from "react";

import TailoredStrategies from "./TailoredStrategies";
import Creativity from "./Creativity";
import DedicatedSupport from "./DedicatedSupport";
import CostEffective from "./CostEffective";
import Expertise from "./Expertise";
import Reach from "./Reach";

function Choose() {
  return (
    <div
      id="why-choose-us"
      className="text-black dark:text-white min-h-screen px-10 "
    >
      <h1 className="text-7xl font-light">Why Choose Us</h1>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row justify-evenly items-center mt-10">
        {/* First Column */}
        <div className="w-full lg:w-[33%] flex flex-col space-y-4">
          <div className="w-full h-96 md:h-60 flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
            <TailoredStrategies />
            <Creativity />
          </div>
          <DedicatedSupport />
        </div>
        {/* Second Column */}
        <CostEffective />
        {/* Third Column */}
        <div className="w-full lg:w-[33%]  flex flex-col space-y-4 text-3xl md:text-5xl lg:text-3xl 3xl:text-5xl">
          <Expertise />
          <Reach />
        </div>
      </div>
    </div>
  );
}

export default Choose;
