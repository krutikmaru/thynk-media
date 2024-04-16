// JobDetailsComponent.js

import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { jobOpeningsData } from "../../utils/data/careers/jobOpenings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const JobOpening = () => {
  const { id } = useParams();

  const job = jobOpeningsData.find((job) => job.id === id);

  if (!job) {
    return <div>No job found for ID: {id}</div>;
  }

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
      className="max-w-2xl mx-auto px-10 py-8 flex flex-col space-y-4"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-4 dark:text-neutral-200">
          {job.title}
        </h2>
        <p className="text-gray-600 dark:text-neutral-500 mb-2">
          Experience: {job.experience}
        </p>
        <p className="text-gray-600 dark:text-neutral-500 mb-2">
          Location: {job.location}
        </p>
        <p className="text-gray-600 dark:text-neutral-500 mb-2">
          Salary: {job.salary}
        </p>
      </div>
      <div className="dark:text-neutral-200">
        <h3 className="text-lg font-medium mb-2">Job Description:</h3>
        <ul className="list-disc pl-6 dark:text-neutral-400">
          {job.jobDescription.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="dark:text-neutral-200">
        <h3 className="text-lg font-medium mb-2">Skills Needed:</h3>
        <ul className="list-disc pl-6 dark:text-neutral-400">
          {job.skillsNeeded.map((skill, index) => (
            <li key={index} className="mb-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-gray-600 dark:text-neutral-500 mb-2">
          Role: {job.role}
        </p>
        <p className="text-gray-600 dark:text-neutral-500 mb-2">
          Department: {job.department}
        </p>
        <p className="text-gray-600 dark:text-neutral-500 mb-2">
          Employment Type: {job.employmentType}
        </p>
      </div>

      {/* Apply options */}
      <div className="flex justify-between items-center mt-8">
        <a
          href="https://www.linkedin.com/company/vmsmediaindia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:underline"
        >
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          Apply on LinkedIn
        </a>
        <a
          href="https://www.instagram.com/thynkmedia.hq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-fuchsia-500 hover:underline"
        >
          <FontAwesomeIcon icon={faInstagram} className="mr-2" />
          Instagram
        </a>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        * Hassle free recruitment process.
      </p>
    </motion.div>
  );
};

export default JobOpening;
