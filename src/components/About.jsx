import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-title reveal">
        <span className="subtitle">About Me</span>
        <h2>Bridging <span className="highlight">Tech & Data</span></h2>
      </div>
      <div className="about-content reveal">
        <div className="about-text glass">
          <p>I am a versatile <strong>Web Developer & Data Automation Specialist</strong>. My expertise lies in building responsive, modern websites and automating complex data workflows.</p>
          <p>With a strong foundation in modern web technologies and advanced Excel VBA, I help businesses streamline their operations, build internal tools, and establish a powerful online presence.</p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
