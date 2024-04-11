import React from "react";
import { links } from "../../../../utils/data/navbar/links";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useApplicationManager } from "../../../../contexts/ApplicationContext";
import {
  faLightbulb,
  faMoon,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function MobileMenu() {
  const { theme, toggleTheme } = useApplicationManager();

  return (
    <div className="w-full pb-52 p-5">
      <ul className="flex flex-col space-y-2 px-5">
        {links.map((link) => {
          return (
            <li
              key={link.to}
              className="w-full border-b-[1px] flex items-center justify-start space-x-4 text-black dark:text-brand-beige border-b-neutral-200 dark:border-b-neutral-800 py-5 text-2xl"
            >
              <FontAwesomeIcon icon={link.icon} className="w-12" />
              <Link to={link.to}>{link.title}</Link>
            </li>
          );
        })}
        <li
          onClick={toggleTheme}
          className="w-full border-b-[1px] flex items-center justify-start space-x-4 text-black dark:text-brand-beige border-b-neutral-200 dark:border-b-neutral-800 py-5 text-2xl"
        >
          {theme === "light" ? (
            <>
              <FontAwesomeIcon className="w-12" icon={faMoon} />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className="text-brand-beige w-12"
                icon={faLightbulb}
              />
              <span>Light Mode</span>
            </>
          )}
        </li>
        <li className="w-full flex items-center justify-start space-x-4 text-red-400 py-5 text-2xl">
          <FontAwesomeIcon icon={faXmark} className="w-12" />
          <span>Back</span>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
