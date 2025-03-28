import React, { useState } from "react";

const NavBar = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">Navdeep Singh</a>
      <nav className="navbar-links">
        <div className="left-links">
          <a href="#Home">Home</a>
          <a href="#skill">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>

          {/* Projects Dropdown */}
          {/* <div 
            className="dropdown" 
            onMouseEnter={() => setShowProjects(true)} 
            onMouseLeave={() => setShowProjects(false)}
          >
            <a href="#projects" className="dropdown-toggle">Projects ▾</a>
            {showProjects && (
              <div className="dropdown-menu">
                <a href="https://github.com/Nikhil112024/Real-Time-Panoramic-Surveillance-and-Mapping-System">Panoramic Surveillance System</a>
                <a href="https://github.com/Nikhil112024/EyeControlledMouse">Eye-Controlled Mouse</a>
                <a href="https://github.com/Nikhil112024/ai-chatbot">AI Chatbot</a>
                <a href="https://github.com/Nikhil112024/social-media-app">All-in-One Social Media Application</a>
                <a href="https://github.com/Nikhil112024/8085-simulator">8085 Microprocessor</a>
                <a href="https://github.com/Nikhil112024/ai-image-gen">AI-Powered Image Generation Website</a>
                <a href="https://github.com/Nikhil112024/hand-controlled-mouse">Virtual Hand-Controlled Mouse</a>
                <a href="https://github.com/Nikhil112024/diveq-app">DiveQ - Dive Analysis App for Swimmers</a>
              </div>
            )}
          </div> */}

          {/* <a href="#blog">Blog</a> */}

          <a href="#whatIdo">What I Do</a>
          
        </div>

        {/* Right-aligned Contact Button */}
        <div className="right-links">
          <a href="mailto:navdeepsinghnegi999@gmail.com" className="btn-nav-contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
