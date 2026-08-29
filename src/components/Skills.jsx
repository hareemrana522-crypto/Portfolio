import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-title reveal">
        <span className="subtitle">My Expertise</span>
        <h2>Technical <span className="highlight">Skills</span></h2>
      </div>
      <div className="skills-container">
        
        <div className="skill-card glass reveal">
          <div className="icon-wrapper">
            <i className="fa-solid fa-code"></i>
          </div>
          <h3>Web Development</h3>
          <div className="skill-tags">
            <span className="skill-badge">HTML5 / CSS3</span>
            <span className="skill-badge">JavaScript (ES6+)</span>
            <span className="skill-badge">Tailwind CSS</span>
            <span className="skill-badge">React.js / Vue</span>
            <span className="skill-badge">Node.js / Express</span>
            <span className="skill-badge">MongoDB / SQL</span>
          </div>
        </div>

        <div className="skill-card glass reveal">
          <div className="icon-wrapper mint">
            <i className="fa-solid fa-file-excel"></i>
          </div>
          <h3>Excel VBA</h3>
          <div className="skill-tags">
            <span className="skill-badge">VBA Macros</span>
            <span className="skill-badge">Dashboards</span>
            <span className="skill-badge">Power Query</span>
            <span className="skill-badge">Outlook</span>
            <span className="skill-badge">Consolidation</span>
            <span className="skill-badge">UserForms</span>
            <span className="skill-badge">Reporting</span>
          </div>
        </div>

        <div className="skill-card glass reveal">
          <div className="icon-wrapper">
            <i className="fa-solid fa-toolbox"></i>
          </div>
          <h3>Tools & Platforms</h3>
          <div className="skill-tags">
            <span className="skill-badge">Git & GitHub</span>
            <span className="skill-badge">VS Code</span>
            <span className="skill-badge">Postman</span>
            <span className="skill-badge">Vercel</span>
            <span className="skill-badge">ChatGPT</span>
            <span className="skill-badge">Figma</span>
            <span className="skill-badge">NPM</span>
            <span className="skill-badge">DevTools</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
