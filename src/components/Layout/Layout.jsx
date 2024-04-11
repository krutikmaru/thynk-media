import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useApplicationManager } from "../../contexts/ApplicationContext";

function Layout({ children }) {
  const { theme, isMobileMenuActive } = useApplicationManager();

  const rootStyle = `${theme === "dark" ? "dark" : "light"}`;
  const wrapperStyle = `min-h-screen pt-16 ${
    isMobileMenuActive ? "scale-[0.9]" : "scale-[1]"
  } transition-all duration-200`;
  return (
    <div className={rootStyle}>
      <Header />
      <div className="bg-white dark:bg-brand-dark-purple-primary">
        <div className={wrapperStyle}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
