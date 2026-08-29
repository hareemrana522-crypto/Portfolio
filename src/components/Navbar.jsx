import React, { useState, useEffect } from 'react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#home" className="logo custom-logo">
          <div className="logo-mark">
            <span className="a">A</span><span className="w">W</span>
          </div>
          <div className="logo-text">Aqsa<span>.</span></div>
        </a>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="active" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#portfolio" onClick={handleLinkClick}>Portfolio</a>
          <a href="#contact" className="btn-primary-sm" onClick={handleLinkClick}>Hire Me</a>
        </nav>
        <div className="theme-toggle" onClick={toggleTheme}>
          <i className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
