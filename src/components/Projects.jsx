import React from "react";

// Replace with your own image imports
import projImg1 from "../assets/Project thumbnail/Panoramic Surveillance System.webp";
import projImg2 from "../assets/Project thumbnail/Eye-Controlled Mouse.webp";
import projImg3 from "../assets/Project thumbnail/All-in-One Social Media Application.webp";
import projImg4 from "../assets/Project thumbnail/AI Chatbot.webp";
import projImg5 from "../assets/Project thumbnail/8085 Microprocessor Simulation.webp";
import projImg6 from "../assets/Project thumbnail/AI-Powered Image Generation.webp";

export default function Projects() {
  const projectData = [
    {
      label: " React.js, Node.js, WebSockets",
      title: " CodeCollab",
      description: " Built a collaborative code editor with real-time synchronization using WebSockets and React.",
      img: projImg1,
      link: "https://github.com/NavdeepSinghNegi999/CodeCollab"
    },
    {
      label: "Deep Learning(CNN), Python",
      title: " Emotion Detection using CNN ",
      description: "Developed a CNN-based model to detect emotions from facial expressions with enhanced accuracy.",
      img: projImg2,
      link: "https://github.com/NavdeepSinghNegi999/Emotion_Detection"
    },
    {
      label: " HTML, CSS, JavaScript",
      title: " Sorting Visualizer",
      description: " An interactive web-based sorting algorithm visualizer to demonstrate various sorting techniques.",
      img: projImg3,
      link: "https://github.com/NavdeepSinghNegi999/Sorting_Visualizer"
    },
    
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>
        Here are some of my key projects—feel free to explore and learn more about them!
        </p>
      </div>

      {/* 3-column grid on desktop, 2 on tablet, 1 on mobile */}
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <div key={idx} className="project-card">
            {/* Fixed-height image for consistent card size */}
            <img 
              src={project.img} 
              alt={project.title} 
              className="project-image" 
            />
            <div className="project-content">
              <span className="project-label">{project.label}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* "Project Link →" button linking to project.link */}
              <a 
                className="project-link-btn" 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
              >
                Project Link →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="projects-footer">
        <button className="more-projects-btn">More Project</button>
      </div> */}
    </section>
  );
}
