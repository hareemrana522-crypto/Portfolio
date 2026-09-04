import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-title reveal">
        <span className="subtitle">What I Do</span>
        <h2>My <span className="highlight">Services</span></h2>
      </div>
      <div className="services-grid">
        
        {/* Service 1 */}
        <div className="service-card glass reveal">
          <div className="card-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            <div className="icon-wrapper">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3>Custom Web Development</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            I build modern, fast, and fully responsive web applications using React, Next.js, and Node.js. Whether you need a landing page, an e-commerce site, or a complex dashboard, I deliver production-ready frontends and robust backends.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card glass reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="card-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            <div className="icon-wrapper">
              <i className="fa-solid fa-file-excel"></i>
            </div>
            <h3>Excel VBA & Automation</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Stop wasting hours on manual data entry. I create custom Excel Macros, advanced VBA scripts, and automated financial dashboards that eliminate human error and turn hours of work into a single click.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card glass reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="card-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            <div className="icon-wrapper">
              <i className="fa-brands fa-google"></i>
            </div>
            <h3>Google Workspace Solutions</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            I automate your business workflows directly inside Google Workspace. Using Google Apps Script, I seamlessly connect Google Sheets, Docs, Gmail, and Forms to create intelligent internal business tools.
          </p>
        </div>

        {/* Service 4 */}
        <div className="service-card glass reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="card-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            <div className="icon-wrapper">
              <i className="fa-solid fa-network-wired"></i>
            </div>
            <h3>Business Process Automation</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            I bridge the gap between your favorite apps. By integrating third-party APIs and building custom middleware, I ensure your CRM, accounting software, and operational tools talk to each other flawlessly.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
