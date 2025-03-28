import React from "react";
import "./styles/global.css";

import ContinuousSkillsMarquee from "./components/ContinuousSkillsMarquee";

import DarkSkills from "./components/DarkSkills"; 
import Projects from "./components/Projects";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import WhatIDo from "./components/WhatIDo";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";




function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ContinuousSkillsMarquee />
  
      <DarkSkills />
      <Projects />
      {/* <DarkCallToAction /> */}
      <Achievements/>
      <WhatIDo />
      <Footer />
    </>
  );
}

export default App;
