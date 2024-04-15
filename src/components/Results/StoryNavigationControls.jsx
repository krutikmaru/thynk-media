import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function StoryNavigationControls({ nextStory, previousStory }) {
  return (
    <>
      {/* Tap Areas */}
      <div
        onClick={previousStory}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex justify-center items-center  cursor-pointer"
      ></div>
      <div
        onClick={nextStory}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex justify-center items-center  cursor-pointer"
      ></div>
      {/* Button Controls */}
      <button
        onClick={previousStory}
        className="absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center bg-white rounded-full cursor-pointer"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={nextStory}
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center bg-white rounded-full cursor-pointer"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
}

export default StoryNavigationControls;
