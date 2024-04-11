import React, { createContext, useContext, useState } from "react";

const ApplicationManagerContext = createContext();

export const useApplicationManager = () => {
  const context = useContext(ApplicationManagerContext);
  if (!context) {
    throw new Error(
      "useApplicationManager must be used within a ApplicationManagerProvider"
    );
  }
  return context;
};

export const ApplicationManagerProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ApplicationManagerContext.Provider value={value}>
      {children}
    </ApplicationManagerContext.Provider>
  );
};
