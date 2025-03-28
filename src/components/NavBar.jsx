import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo - Adjusted for responsiveness */}
      <a href="#home" className="navbar-brand">Navdeep Singh</a>

      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navbar Links - Hidden by Default on Mobile */}
      <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#Home">Home</a>
        <a href="#skill">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#whatIdo">What I Do</a>
        <a href="mailto:navdeepsinghnegi999@gmail.com" className="btn-nav-contact">Contact</a>
      </nav>
    </header>
  );
};

export default NavBar;
