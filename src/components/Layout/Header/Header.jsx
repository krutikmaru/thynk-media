import React, { useEffect, useState } from "react";
import FloatingNavbar from "./FloatingNavbar";
import StuckNavbar from "./StuckNavbar";

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const changeNavLayout = () => {
    if (window.scrollY >= 80) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavLayout);
    return () => {
      window.removeEventListener("scroll", changeNavLayout);
    };
  }, []);

  return (
    <header>
      <nav className="h-16 w-full fixed top-0 left-0 z-[100000]">
        {hasScrolled ? <FloatingNavbar /> : <StuckNavbar />}
      </nav>
    </header>
  );
}

export default Header;
