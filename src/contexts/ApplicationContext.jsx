import React, { createContext, useContext, useEffect, useState } from "react";

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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const closeMenu = () => {
    setIsMobileMenuActive(false);
  };
  const openMenu = () => {
    setIsMobileMenuActive(true);
  };

  const value = {
    theme,
    isSmallScreen,
    isMobileMenuActive,
    toggleTheme,
    openMenu,
    closeMenu,
  };
  return (
    <ApplicationManagerContext.Provider value={value}>
      {children}
    </ApplicationManagerContext.Provider>
  );
};
