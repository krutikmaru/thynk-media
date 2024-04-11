import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useApplicationManager } from "../../contexts/ApplicationContext";

function Layout({ children }) {
  const { theme } = useApplicationManager();
  const rootStyle = `${theme === "dark" ? "dark" : "light"}`;
  return (
    <div className={rootStyle}>
      <Header />
      <div className="min-h-screen pt-16 dark:bg-neutral-950 ">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
