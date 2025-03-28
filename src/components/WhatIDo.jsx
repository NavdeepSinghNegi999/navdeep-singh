import React from "react";

const WhatIDo = () => {
  return (
    <section className="what-i-do" id = "whatIdo">
      <div className="container">
        {/* Left Section */}
        <div className="what-i-do-text">
          <h2>What I do?</h2>
          <div>
          <p> 
            I am a problem-solver and tech enthusiast who thrives on tackling complex challenges and building impactful solutions. With a strong foundation in algorithms, machine learning, and software development, I push the boundaries of efficiency and innovation. 
          </p>
            <p>
              My expertise in competitive programming has sharpened my ability to think critically under constraints, achieving a contest rating of 1766+ and solving 1200+ problems that refine my algorithmic thinking. 
           </p>
           <p>
           Beyond coding challenges, I am passionate about AI and deep learning, working on projects like image captioning, speech emotion recognition, and self-driving technology.
           I love blending full-stack development with intelligent systems, creating applications that are both functional and scalable. 
           </p>
          </div>
          {/* <button className="btn-primary" onClick={() => window.location.href = "mailto:navdeepsinghnegi999@gmail.com"}>Say Hello!</button> */}
          <button className="dark-cta-button" onClick={() => window.location.href = "mailto:navdeepsinghnegi999@gmail.com"}>
            Let’s work Together →
          </button>
        </div>

        {/* Right Section: Skills Cards */}
        <div className="what-i-do-cards">

          <div className="card active">
            <h3>Competitive Programming (C++)</h3>
            <p>
              Achieved a contest rating of 1766, demonstrating strong problem-solving and algorithmic thinking.  
              Consistently participate in coding contests, improving speed, accuracy, and logic-building skills.  
            </p>
          </div>

          <div className="card">
            <h3>Machine learning (Python,API)</h3>
            <p>
            Experienced in developing deep learning and NLP models using TensorFlow, PyTorch, and Scikit-learn. 
            Skilled in integrating models with FastAPI for real-time inference, optimizing performance, and ensuring scalable deployment.
            </p>
          </div>

          <div className="card">
            <h3>Web Development and React.js Expertise</h3>
            <p>
            Experienced in building responsive web applications using React.js. 
            Skilled in state management with Context API, integrating APIs, and designing user-friendly interfaces. Focused on developing scalable and interactive front-end solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
