import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stories } from "../../utils/data/stories/stories";
import StoryNavigationControls from "./StoryNavigationControls";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Loader from "../reusables/Loader/Loader";

function Stories() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const storyRef = useRef(null);
  const [storiesMetaData, setStoriesMetaData] = useState({
    totalStories: stories.length,
    currentStoryIndex: 0,
    currentStoryProgress: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isImageLoaded) return;
      setStoriesMetaData((prev) => {
        let nextIndex = prev.currentStoryIndex;
        let nextProgress = null;
        if (prev.currentStoryProgress === 100) {
          nextProgress = 0;
          if (prev.currentStoryIndex === prev.totalStories - 1) {
            navigate("/");
          } else {
            nextIndex = prev.currentStoryIndex + 1;
            setIsImageLoaded(false);
          }
        } else {
          nextProgress = prev.currentStoryProgress + 1;
        }

        return {
          ...prev,
          currentStoryIndex: nextIndex,
          currentStoryProgress: nextProgress,
        };
      });
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [isImageLoaded, navigate]);

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.keyCode === 27) {
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleEscKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [navigate]);

  const nextStory = () => {
    if (
      storiesMetaData.currentStoryIndex ===
      storiesMetaData.totalStories - 1
    ) {
      navigate("/");
      return;
    }

    setStoriesMetaData((prevState) => ({
      ...prevState,
      currentStoryIndex: prevState.currentStoryIndex + 1,
      currentStoryProgress: 0,
    }));
  };

  const previousStory = () => {
    if (storiesMetaData.currentStoryIndex === 0) {
      return;
    }
    setStoriesMetaData((prevState) => ({
      ...prevState,
      currentStoryIndex: prevState.currentStoryIndex - 1,
      currentStoryProgress: 0,
    }));
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.4 },
      }}
      className="flex relative justify-center items-center overflow-hidden"
    >
      {!isImageLoaded && (
        <div className="fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center z-20">
          <Loader />
        </div>
      )}
      {/* Background */}
      <div className="absolute w-full h-full bg-black">
        <img
          className="w-full h-full object-cover opacity-50 blur-lg"
          src={stories[storiesMetaData.currentStoryIndex].image}
          alt="Result 7"
        />
      </div>
      <div
        className="min-w-[400px] max-w-[400px] h-screen relative z-10 bg-neutral-900"
        ref={storyRef}
      >
        <button
          onClick={() => navigate("/")}
          className="text-white fixed right-5 top-6 flex flex-col justify-center items-center"
        >
          <FontAwesomeIcon icon={faX} className="text-xl" />
        </button>
        <StoryNavigationControls {...{ nextStory, previousStory }} />
        <ProgressBar {...storiesMetaData} />
        <img
          src={stories[storiesMetaData.currentStoryIndex].image}
          alt="Result"
          onLoad={handleImageLoad}
        />
      </div>
    </motion.div>
  );
}

export default Stories;
