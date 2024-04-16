import React from "react";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useApplicationManager();

  const usefulLinks = [
    { title: "Results", to: "/results" },
    { title: "Services", to: "/services" },
    { title: "Our Team", to: "/our-team" },
  ];

  const otherLinks = [
    { title: "Careers", to: "/careers" },
    {
      title: "Terms & Conditions",
      to: "/terms-and-conditions",
    },
    { title: "About Us", to: "/about-us" },
  ];
  return (
    <div className="p-10 flex flex-col space-y-10 bg-white dark:bg-brand-dark-purple-primary text-black dark:text-white border-t-[1px] border-neutral-300 dark:border-brand-dark-purple-primary-light">
      <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between ">
        <div className=" h-6 md:h-8 relative flex justify-center items-center">
          <img
            src={`assets/images/${theme}/logo.png`}
            alt="thynk"
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 space-y-10 sm:space-x-10 sm:space-y-0">
          <div className="flex flex-col space-y-2">
            <h1 className="text-lg underline">Useful Links</h1>
            {usefulLinks.map((userfulLink) => {
              return (
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  key={userfulLink.to}
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-beige hover:underline"
                  to={userfulLink.to}
                >
                  {userfulLink.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-lg underline">Other Links</h1>
            {otherLinks.map((otherLink) => {
              return (
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  key={otherLink.to}
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-beige hover:underline"
                  to={otherLink.to}
                >
                  {otherLink.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" py-5 flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0 sm:items-center border-t-[1px] text-sm text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-900">
        <h1>
          Copyright © {new Date().getFullYear()} thynk media. All right
          reserved.
        </h1>
        <h1>Made with 💜 by Krutik Maru @ thynk, India</h1>
      </div>
    </div>
  );
}

export default Footer;
