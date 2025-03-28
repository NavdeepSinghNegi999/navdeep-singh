import React from "react";
import {
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiPython, SiHtml5, SiCss3, SiJavascript,
  SiReact, SiNodedotjs,
  SiGit, 
  SiTensorflow,
} from "react-icons/si";

export default function ContinuousSkillsMarquee() {
  // List out all skills you want to show
  const skills = [
    { icon: <SiCplusplus />, label: "C++" },
    { icon: <SiPython />, label: "Python" },
    { icon: <SiHtml5 />, label: "HTML5" },
    { icon: <SiCss3 />, label: "CSS3" },
    { icon: <SiJavascript />, label: "Javascript" },


    { icon: <SiMongodb />, label: "DBMS" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiTensorflow />, label: "Deep Learning" },

    { icon: <SiReact />, label: "React" },
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiGit />, label: "Git" },
  
  ];

  return (
    <section className="skills-marquee">
      <div className="skills-marquee-track">
        {/* First set */}
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.label}</h4>
          </div>
        ))}
        {/* Duplicate set for seamless looping */}
        {skills.map((skill, index) => (
          <div key={`dup-${index}`} className="skill-box">
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
