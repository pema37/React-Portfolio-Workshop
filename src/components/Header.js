import React, { useState, useEffect, useRef } from "react";
import '../componentStyles/Header.css';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(); // Reference to the nav element

  // Toggle the menu open and closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handles click outside the navigation menu and inside it
  useEffect(() => {
    // Define the function inside the effect so it has the current isOpen value
    const handleClickAnywhere = (event) => {
      // Only close the menu if it's open and the click is outside the nav element
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Bind the event listener if the menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickAnywhere);
    }

    // Clean up the event listener when the menu is closed or if the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickAnywhere);
    };
  }, [isOpen]); // Add isOpen as a dependency

  return (
    <header role="banner" className="header">
      <div className="header-logo">
        <a href="#app">
          <h1 className="header-name">React Native Vancouver</h1>
        </a>
      </div>

      <nav ref={navRef} className="mobile-nav" role="navigation" aria-label="Mobile Navigation">
        <button 
          onClick={toggleMenu} 
          className="hamburger-toggle" 
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}>
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <ul className={`mobile-nav-list ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


