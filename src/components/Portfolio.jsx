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
        <button 
          className={`tab-btn ${activeTab === 'tab-sheets' ? 'active' : ''}`} 
          onClick={() => setActiveTab('tab-sheets')}
        >
          Google Sheets
        </button>
      </div>

      <div className="portfolio-content">
        {/* Web Projects */}
        <div className={`tab-content ${activeTab === 'tab-web' ? 'active' : ''}`} id="tab-web">
          <div className="projects-grid">
            <div className="project-card glass reveal">
              <div className="project-image" style={{ height: '240px', backgroundColor: '#1a1a2e', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <img src="hashturn_real.png" alt="Hashturn Software House" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
              <div className="project-image" style={{ height: '240px', backgroundColor: '#1a1a2e', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <img src="howtoselfhost.png" alt="HowToSelfHost Website" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h4>howtoselfhost.com</h4>
                <p>High-performance cloud server hosting platform frontend with modern, sleek UI design.</p>
                <div className="skill-tags" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>React</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Tailwind</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Frontend</span>
                </div>
                <a href="https://vps.howtoselfhost.com/" target="_blank" rel="noopener noreferrer" className="btn-text">Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* VBA Projects */}
        <div className={`tab-content ${activeTab === 'tab-vba' ? 'active' : ''}`} id="tab-vba">
          <div className="projects-grid">
            <div className="project-card glass reveal">
              <div className="project-image" style={{ height: '240px', backgroundColor: '#1a1a2e', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <img src="excel_screenshot.jpg" alt="Automated Sales Consolidation Dashboard" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
              <div className="project-image" style={{ height: '240px', backgroundColor: '#1a1a2e', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <img src="dummy_vba.jpg" alt="Corporate Financial Reporting Tool" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h4>Corporate Financial Reporting Tool</h4>
                <p>Automated macro script that consolidates 50+ Excel sheets into one unified financial report in seconds.</p>
                <div className="skill-tags" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Power Query</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>VBA</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Macros</span>
                </div>
                <a href="#" className="btn-text">View Details <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Sheets Projects */}
        <div className={`tab-content ${activeTab === 'tab-sheets' ? 'active' : ''}`} id="tab-sheets">
          <div className="projects-grid">
            <div className="project-card glass reveal">
              <div className="project-image" style={{ height: '240px', backgroundColor: '#1a1a2e', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <img src="hr_project_hero.jpg" alt="Automated Inventory Dashboard" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h4>HR Operations & Performance Management System</h4>
                <p>Automated Google Sheets Architecture with Google Apps Script Daily Email Alerts.</p>
                <div className="skill-tags" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Google Sheets</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Google Apps Script</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Automation</span>
                </div>
                <a href="sheets-details.html" className="btn-text">View Details <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="project-card glass reveal">
              <div className="project-image" style={{ height: '240px', backgroundColor: '#1a1a2e', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <img src="dummy_sheets_crm.jpg" alt="Automated CRM & Invoice Generator" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h4>Automated CRM & Invoice Generator</h4>
                <p>Fully automated client relationship manager built in Google Sheets with one-click PDF invoice generation.</p>
                <div className="skill-tags" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Google Sheets</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>Google Forms</span>
                  <span className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>AppScript</span>
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
