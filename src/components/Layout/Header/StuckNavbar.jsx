import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarControls from "./NavbarControls";

function StuckNavbar() {
  return (
    <div className="h-full w-full flex items-center justify-between px-4 dark:bg-brand-dark-purple-primary backdrop-blur-md text-white border-b-[1px] border-brand-purple-border">
      <NavbarLogo />
      <NavbarLinks />
      <NavbarControls />
    </div>
  );
}

export default StuckNavbar;
