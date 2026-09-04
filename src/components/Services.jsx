import React, { useState } from 'react';

const servicesData = [
  {
    id: 'web',
    title: 'Custom Web Development',
    icon: 'fa-solid fa-code',
    desc: 'I build modern, fast, and fully responsive web applications using React, Next.js, and Node.js. Whether you need a landing page, an e-commerce site, or a complex dashboard, I deliver production-ready frontends and robust backends.'
  },
  {
    id: 'excel',
    title: 'Excel VBA & Automation',
    icon: 'fa-solid fa-file-excel',
    desc: 'Stop wasting hours on manual data entry. I create custom Excel Macros, advanced VBA scripts, and automated financial dashboards that eliminate human error and turn hours of work into a single click.'
  },
  {
    id: 'google',
    title: 'Google Workspace',
    icon: 'fa-brands fa-google',
    desc: 'I automate your business workflows directly inside Google Workspace. Using Google Apps Script, I seamlessly connect Google Sheets, Docs, Gmail, and Forms to create intelligent internal business tools.'
  },
  {
    id: 'automation',
    title: 'Business Automation',
    icon: 'fa-solid fa-network-wired',
    desc: 'I bridge the gap between your favorite apps. By integrating third-party APIs and building custom middleware, I ensure your CRM, accounting software, and operational tools talk to each other flawlessly.'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState('web');

  const activeData = servicesData.find(s => s.id === activeService);

  return (
    <section id="services" className="services">
      <div className="section-title reveal">
        <span className="subtitle">What I Do</span>
        <h2>My <span className="highlight">Services</span></h2>
      </div>
      
      <div className="services-interactive-container reveal">
        <div className="services-sidebar">
          {servicesData.map(service => (
            <div 
              key={service.id} 
              className={`service-tab ${activeService === service.id ? 'active' : ''}`}
              onClick={() => setActiveService(service.id)}
            >
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="services-content-area">
           <div className="service-content-inner" key={activeData.id}>
             <div className="icon-wrapper large-icon">
               <i className={activeData.icon}></i>
             </div>
             <h3>{activeData.title}</h3>
             <p>{activeData.desc}</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
