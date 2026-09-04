import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
        <div className="section-title reveal">
            <span className="subtitle">Who I Am</span>
            <h2>About <span className="highlight">Me</span></h2>
        </div>
        
        <div className="about-container">
            <div className="about-image glass reveal">
                <img src="profile.jpg.png" alt="Aqsa" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
            </div>
            
            <div className="about-text glass reveal">
                <h3>Hi, I'm Aqsa.</h3>
                <p>I am a passionate <strong>Web Developer</strong>, <strong>Excel VBA</strong>, and <strong>Google Sheets Expert</strong>. I specialize in bridging the gap between beautiful web interfaces and complex back-office automation.</p>
                <p>With a unique blend of skills, I don't just build websites that look good—I build systems that save time. Whether you need a modern web platform or an automated Google Sheets/Excel dashboard that cuts your weekly reporting time by 90%, I've got you covered.</p>
                

                
                <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Let's Connect</a>
            </div>
        </div>
    </section>
  );
};

export default About;
