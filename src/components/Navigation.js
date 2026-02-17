import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-icon">🪚</span>
          <span className="logo-text">E&M Carpentry</span>
        </div>
        
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
