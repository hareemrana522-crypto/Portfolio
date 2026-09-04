import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const typingRef = useRef(null);
  
  useEffect(() => {
    const strings = ["a Web Developer", "an Excel VBA Developer", "an Automation Specialist", "a Google Workspace Expert"];
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let timeoutId;

    const type = () => {
      if (!typingRef.current) return;
      
      const currentString = strings[stringIndex];
      
      if (isDeleting) {
        typingRef.current.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingRef.current.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentString.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        typingSpeed = 500; // Pause before typing next
      }

      timeoutId = setTimeout(type, typingSpeed);
    };

    timeoutId = setTimeout(type, typingSpeed);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content reveal">
            <h3 className="hello-text">Hello, It's Me</h3>
            <h1 className="name-text">Aqsa Wazeer</h1>
            <h2 className="role-text">
                And I'm <span className="highlight typed-block">
                    <span className="typing-text" ref={typingRef}></span><span className="cursor"></span>
                </span>
            </h2>
            <p className="desc-text">I engineer high-performance web applications and intelligent automation systems. From custom Google Workspace workflows to advanced Excel VBA, I transform complex manual bottlenecks into seamless, scalable digital solutions.</p>
            
            <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">Hire Me</a>
                <a href="Aqsa_Wazeer_Resume.pdf" download className="btn btn-secondary"><i className="fa-solid fa-download"></i> Resume</a>
            </div>

            <div className="social-links circle-links">
                <a href="https://www.linkedin.com/in/aqsa-wazeer-a899b6417" target="_blank" title="LinkedIn" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/hareemrana522-crypto" target="_blank" title="GitHub" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://wa.me/message/FQJ6FZHLEUMCH1" target="_blank" title="WhatsApp" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="mailto:hareemrana522@gmail.com" title="Email Me"><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <div className="hero-image reveal">
            <div className="image-container">
                <img src="profile.jpg.png" alt="Aqsa Wazeer" style={{ 
                    WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                }} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
