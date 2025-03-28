import React from "react";

const Achievements = () => {
  const achievements = [
    "🏆 Top 9.06% on LeetCode",
    "🤖 Participated in Amazon ML Competition",
    "🎓 Completed Salesforce Developer Virtual Internship",
    "💡 Solved 1200+ LeetCode problems",
    "🔬 Published Research in IEEE",
    "☁️ Google Cloud Generative AI Virtual Internship",
  ];

  return (
    <section className="achievements-section" id="achievements">
      <h2 className="achievements-title">Achievements</h2>
      <div className="grid-container">
        {achievements.map((ach, index) => (
          <div key={index} className="grid-item">{ach}</div>
        ))}
      </div>
    </section>
  );
};

// CSS Styles
const styles = `
  .achievements-section {
    text-align: center;
    padding: 4rem 2rem;
    background:#1c2739; 
  }

  .achievements-title {
    font-size: 2rem;
    color: #ffffff; /* Light white color for better contrast */
    margin-bottom: 2rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    max-width: 800px;
    margin: auto;
  }

  .grid-item {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    color: #333;
    text-align: center;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Achievements;
