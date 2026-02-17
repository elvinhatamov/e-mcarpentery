import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Crafting Excellence in Every Detail
        </h1>
        <p className="hero-subtitle">
          Professional carpentry services with over 15 years of experience in custom furniture, 
          cabinetry, and fine woodworking.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Get Free Quote
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work
          </button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}

export default Hero;
