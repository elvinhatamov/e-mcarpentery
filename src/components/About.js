import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About E&M Carpentry</h2>
          <div className="about-grid">
            <div className="about-text">
              <h3>Your Trusted Carpentry Experts</h3>
              <p>
                With over 15 years of experience in the carpentry industry, E&M Carpentry has built 
                a reputation for excellence, craftsmanship, and attention to detail. We take pride in 
                transforming our clients' visions into stunning realities.
              </p>
              <p>
                Our team of skilled craftsmen combines traditional woodworking techniques with modern 
                innovation to deliver exceptional results. Whether it's a custom furniture piece, a 
                complete kitchen remodel, or intricate finish carpentry, we approach every project with 
                the same dedication and passion.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">🏆</div>
                  <div className="feature-content">
                    <h4>15+ Years Experience</h4>
                    <p>Proven track record of excellence</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⭐</div>
                  <div className="feature-content">
                    <h4>Quality Craftsmanship</h4>
                    <p>Attention to every detail</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-content">
                    <h4>Customer Satisfaction</h4>
                    <p>Your vision is our priority</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💎</div>
                  <div className="feature-content">
                    <h4>Premium Materials</h4>
                    <p>Only the finest wood and materials</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600" 
                  alt="Carpenter working with wood"
                  loading="lazy"
                />
              </div>
              <div className="stats-box">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
