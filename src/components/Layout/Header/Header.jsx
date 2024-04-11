import React from "react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

function Header() {
  const { isSmallScreen } = useApplicationManager();

  return (
    <header>
      <nav className="h-16 w-full fixed top-0 left-0 z-[100000]">
        {isSmallScreen ? <MobileNavbar /> : <DesktopNavbar />}
      </nav>
    </header>
  );
}

export default Header;
