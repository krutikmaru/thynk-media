import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { jobOpeningsData } from "../../utils/data/careers/jobOpenings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faDollar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const CareersComponent = () => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      exit={{
        y: 20,
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="p-10"
    >
      <h2 className="text-2xl font-semibold col-span-2 mb-4 dark:text-white">
        We are Hiring!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobOpeningsData.map((job) => (
          <div
            key={job.id}
            className="border-2 border-neutral-400 dark:border-neutral-800 p-5 border-dashed rounded-lg flex flex-col space-y-4"
          >
            <h3 className="text-lg font-medium dark:text-neutral-100">
              {job.title}
            </h3>
            <div className="flex flex-col items-start space-y-2 text-gray-600 dark:text-neutral-400">
              <p className="flex space-x-2 items-center justify-start">
                <FontAwesomeIcon className="text-neutral-500" icon={faClock} />
                <span>Experience: {job.experience}</span>
              </p>
              <p className=" flex space-x-2 items-center justify-start">
                <FontAwesomeIcon
                  className="text-neutral-500"
                  icon={faLocationDot}
                />
                <span>Location: {job.location}</span>
              </p>
              <p className=" flex space-x-2 items-center justify-start">
                <FontAwesomeIcon className="text-neutral-500" icon={faDollar} />
                <span>Salary: {job.salary}</span>
              </p>
            </div>
            <Link
              to={`/careers/${job.id}`}
              className="w-32 flex items-center justify-center text-white bg-black dark:bg-white dark:text-black dark:font-medium py-2 px-4 font-light text-xs dark:text-sm rounded-lg mt-2"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CareersComponent;
