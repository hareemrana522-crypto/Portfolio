import React, { useState } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('tab-web');

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-title reveal">
        <span className="subtitle">My Work</span>
        <h2>Featured <span className="highlight">Projects</span></h2>
      </div>
      
      <div className="portfolio-tabs reveal">
        <button 
          className={`tab-btn ${activeTab === 'tab-web' ? 'active' : ''}`} 
          onClick={() => setActiveTab('tab-web')}
        >
          Web Development
        </button>
        <button 
          className={`tab-btn ${activeTab === 'tab-vba' ? 'active' : ''}`} 
          onClick={() => setActiveTab('tab-vba')}
        >
          Excel & VBA
        </button>
      </div>

      <div className="portfolio-content">
        {/* Web Projects */}
        <div className={`tab-content ${activeTab === 'tab-web' ? 'active' : ''}`} id="tab-web">
          <div className="projects-grid">
            <div className="project-card glass reveal">
              <div className="project-image" style={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <img src="hashturn_real.png" alt="Hashturn Software House" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="project-info">
                <h4>Hashturn - Software House</h4>
                <p>Custom automation systems that eliminate repetitive tasks and scale business operations.</p>
                <div className="skill-tags" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>React</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Node.js</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Tailwind</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>JS</span>
                </div>
                <a href="hashturn-details.html" className="btn-text">View Details <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            
            <div className="project-card glass reveal">
              <div className="project-image">
                <div style={{ width: '100%', height: '200px', background: 'rgba(111, 255, 176, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-color)', fontSize: '3rem' }}>
                  <i className="fa-solid fa-chart-line"></i>
                </div>
              </div>
              <div className="project-info">
                <h4>SaaS Analytics Dashboard</h4>
                <p>Modern, responsive landing page and dashboard interface built with Tailwind CSS and JavaScript.</p>
                <div className="skill-tags" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Tailwind</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>JS</span>
                </div>
                <a href="#" className="btn-text">View Details <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* VBA Projects */}
        <div className={`tab-content ${activeTab === 'tab-vba' ? 'active' : ''}`} id="tab-vba">
          <div className="projects-grid">
            <div className="project-card glass reveal">
              <div className="project-image" style={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <img src="excel_screenshot.jpg" alt="Automated Sales Consolidation Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="project-info">
                <h4>Automated Sales Consolidation System</h4>
                <p>End-to-end data process automation with real-time inventory management and Outlook integration.</p>
                <div className="skill-tags" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Excel VBA</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Data Integration</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Reporting</span>
                </div>
                <a href="excel-details.html" className="btn-text">View Details <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            
            <div className="project-card glass reveal">
              <div className="project-image">
                <div style={{ width: '100%', height: '200px', background: 'rgba(255, 90, 54, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '3rem' }}>
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                </div>
              </div>
              <div className="project-info">
                <h4>Financial Report Generator</h4>
                <p>Automated macro script that consolidates 50+ Excel sheets into one unified financial report in seconds.</p>
                <div className="skill-tags" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Power Query</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>VBA</span>
                </div>
                <a href="#" className="btn-text">View Details <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
