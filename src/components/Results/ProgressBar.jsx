import React from "react";

function ProgressBar({
  totalStories,
  currentStoryIndex,
  currentStoryProgress,
}) {
  const storyProgressBars = [];
  for (let i = 0; i < totalStories; i++) {
    if (i < currentStoryIndex) {
      storyProgressBars.push(
        <StoryProgressBar isViewed={true} isCurrentStory={false} />
      );
    } else if (i === currentStoryIndex) {
      storyProgressBars.push(
        <StoryProgressBar
          isViewed={false}
          isCurrentStory={true}
          progress={currentStoryProgress}
        />
      );
    } else {
      storyProgressBars.push(
        <StoryProgressBar isViewed={false} isCurrentStory={false} />
      );
    }
  }
  return (
    <div className="absolute top-0 left-0 p-2 w-full flex items-center justify-center space-x-2">
      {storyProgressBars}
    </div>
  );
}

const StoryProgressBar = ({ isViewed, isCurrentStory, progress }) => {
  if (isViewed) {
    return <div className="h-[3px] flex-grow rounded-sm bg-[#fff]" />;
  }
  if (!isCurrentStory) {
    return <div className="h-[3px] flex-grow rounded-sm bg-[#ffffff6a]" />;
  }
  return (
    <div className="h-[3px] flex-grow rounded-sm bg-[#ffffff6a] overflow-hidden">
      <div
        style={{
          transform: `scaleX(${progress / 100})`,
          transformOrigin: "left",
          transition: "transform 0.3s ease-in-out",
        }}
        className="h-full rounded-sm bg-[#fff]"
      />
    </div>
  );
};
export default ProgressBar;
