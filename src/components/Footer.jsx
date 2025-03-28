import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const handleScroll = (e, id) => {
  e.preventDefault();
  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Logo */}
        <div className="footer-logo">
          <div className="logo-circle">NS</div>
          <span className="logo-text">Navdeep Singh</span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="footer-nav">
          <a href="#Home" onClick={(e) => handleScroll(e, "Home")}>Home</a>
          <a href="#skill" onClick={(e) => handleScroll(e, "skill")}>Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a>
          <a href="#achievements" onClick={(e) => handleScroll(e, "achievements")}>Achievements</a>
          <a href="#whatIdo" onClick={(e) => handleScroll(e, "whatIdo")}>What I Do</a>

          <a href="mailto:navdeepsinghnegi999@gmail.com" className="contact-link">Contact</a>
        </nav>

        {/* Right Side: Copyright Text */}
        <div className="footer-right">
          <p>Copyright © 2025 Navdeep.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
