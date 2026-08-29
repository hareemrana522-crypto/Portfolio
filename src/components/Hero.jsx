import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content reveal">
        <span className="subtitle">Welcome to my world</span>
        <h1>Hi, I'm <span className="highlight">Aqsa Wazeer</span></h1>
        <h2 className="typing-text">Web Developer & Automation Expert</h2>
        <p className="desc-text">I design and build production-grade web applications, and end-to-end Excel VBA automation systems that eliminate manual work and scale business operations.</p>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Hire Me</a>
          <a href="Aqsa_Wazeer_CV (3).docx" download className="btn btn-secondary"><i className="fa-solid fa-download"></i> Resume</a>
        </div>

        <div className="social-links circle-links">
          <a href="#"><i className="fa-brands fa-github"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-upwork"></i></a>
        </div>
      </div>

      <div className="hero-image reveal">
        <div className="image-container">
          <img src="profile.jpg.png" alt="Aqsa Wazeer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
