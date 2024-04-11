import React from "react";
import { AnimatePresence } from "framer-motion";
import { useApplicationManager } from "../../../../contexts/ApplicationContext";
import BottomUpSlider from "./BottomUpSlider";

import NavbarLogo from "../DesktopNavbar/NavbarLogo";
import MobileNavbarControls from "./MobileNavbarControls";
import MobileMenu from "./MobileMenu";

function MobileNavbar() {
  const { isMobileMenuActive } = useApplicationManager();
  return (
    <div className="h-full w-full flex items-center justify-between px-4 dark:bg-brand-dark-purple-primary backdrop-blur-md text-white border-b-[1px] border-brand-purple-border">
      <NavbarLogo />
      <MobileNavbarControls />
      <AnimatePresence>
        {isMobileMenuActive && (
          <BottomUpSlider>
            <MobileMenu />
          </BottomUpSlider>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavbar;
