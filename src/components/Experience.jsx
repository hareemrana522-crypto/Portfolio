import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
        <div className="section-title reveal">
            <span className="subtitle">My Journey</span>
            <h2>Work <span className="highlight">Experience</span></h2>
        </div>
        
        <div className="timeline">
            <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                    <h3>Freelance Web Developer & Automation Expert</h3>
                    <h4 className="company">Self-Employed</h4>
                    <span className="date">2023 - Present</span>
                    <p>Building custom web applications and designing automated Google Sheets and Excel VBA systems for clients. Focused on creating efficient, time-saving back-office solutions and modern user interfaces.</p>
                </div>
            </div>
            
            <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                    <h3>Frontend Developer Intern</h3>
                    <h4 className="company">Hashturn</h4>
                    <span className="date">2022 - 2023</span>
                    <p>Collaborated with a team of developers to build responsive web interfaces. Gained hands-on experience in HTML, CSS, JavaScript, and modern front-end practices.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experience;
