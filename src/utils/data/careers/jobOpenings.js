import { v4 as uuidv4 } from "uuid";

export const jobOpeningsData = [
  {
    id: uuidv4(),
    title: "Secretary",
    experience: "1-3 years",
    location: "Mumbai, India (Remote)",
    salary: "Not Disclosed",
    jobDescription: [
      "Manage and organize office operations and procedures",
      "Assist in scheduling appointments and meetings",
      "Handle incoming and outgoing communications",
      "Maintain filing systems and records",
      "Coordinate travel arrangements",
      "Provide administrative support to management team",
    ],
    skillsNeeded: [
      "Excellent communication skills, both written and verbal",
      "Proficiency in Microsoft Office suite (Word, Excel, Outlook, PowerPoint)",
      "Strong organizational skills and attention to detail",
      "Ability to multitask and prioritize tasks effectively",
    ],
    education: {
      undergraduate:
        "Bachelor's degree in Business Administration or related field",
      postgraduate: "Master's degree in Business Administration preferred",
    },
    role: "Administrative",
    department: "Administration",
    employmentType: "Full-time",
  },
  {
    id: uuidv4(),
    title: "Marketing Specialist",
    experience: "1-3 years",
    location: "Mumbai, India (Remote)",
    salary: "Not Disclosed",
    jobDescription: [
      "Develop and implement marketing strategies to promote products or services",
      "Conduct market research to identify trends and opportunities",
      "Create and manage digital marketing campaigns across various channels",
      "Monitor and analyze campaign performance and adjust strategies as needed",
      "Collaborate with cross-functional teams to execute marketing initiatives",
    ],
    skillsNeeded: [
      "Strong analytical and problem-solving skills",
      "Excellent communication and interpersonal skills",
      "Proficiency in digital marketing tools and platforms",
      "Creativity and innovation in developing marketing campaigns",
    ],
    education: {
      undergraduate:
        "Bachelor's degree in Marketing, Business Administration, or related field",
      postgraduate: "Master's degree in Marketing or MBA preferred",
    },
    role: "Marketing",
    department: "Marketing",
    employmentType: "Full-time, Remote",
  },
];
