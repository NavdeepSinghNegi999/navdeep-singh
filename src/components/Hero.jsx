import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import profileImage from "../assets/profile-image.jpg"; 
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero-section" id="Home" >
      <div className="hero-card">
        {/* Image Container + Overlay */}
        <div className="hero-image-container">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="hero-profile-img" 
          />

          {/* Floating overlay with social icons at bottom-center */}
          <div className="hero-social-overlay">
            
            <a href="https://leetcode.com/u/navdeep_singh_999/" target="_blank" rel="noreferrer">
              <SiLeetcode /> 
            </a>
            <a href="https://github.com/NavdeepSinghNegi999/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/navdeep-singh-n/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            
          </div>
        </div>

        {/* Text + Buttons */}
        <div className="hero-text">
          <h2>I am Software Developer</h2>
          {/* <p>
              I am a Computer Science student skilled in Deep Learning, NLP, SQL, React, and Python.  
              I develop AI-driven models and create interactive user interfaces for seamless experiences.  
          </p>
          <p>
              Currently pursuing a B.Tech in Computer Science, I focus on building scalable applications  
              and real-time systems. I enjoy tackling complex problems and turning data into meaningful insights.  
          </p> */}
          <p>
    Hello, I’m Navdeep, a final-year Computer Science student skilled in Deep Learning, NLP, and Full-Stack Development.  
    I build intelligent systems, scalable applications, and optimize real-time systems with a problem-solving mindset.  
</p>
<p>  
    As a Data Science Intern at Zidio Development, I developed deep learning pipelines, optimized models,  
    and extracted insights from complex datasets. My work includes speech emotion recognition,  
    image captioning, and real-world AI applications.  
</p>  

          {/* <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            >My Project</button>
            <button className="btn-secondary" onClick={() => window.open("https://drive.google.com/file/d/1vdFoOw-O4M9jvlHe4iVBaJ7-kPUs2VHB/view?usp=sharing", "_blank")}>
              <FaCloudDownloadAlt className="icon-download" />
              Download CV
            </button>
          </div> */}
          <div className="hero-buttons">
            <button className="btn-primary contact-btn" onClick={() => window.location.href = "mailto:navdeepsinghnegi999@gmail.com"}>
              Contact
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
