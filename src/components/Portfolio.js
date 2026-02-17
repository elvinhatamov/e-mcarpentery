import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600',
      title: 'Modern Kitchen Cabinets',
      category: 'Kitchen Remodeling',
    },
    {
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600',
      title: 'Custom Dining Table',
      category: 'Custom Furniture',
    },
    {
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600',
      title: 'Outdoor Deck',
      category: 'Outdoor Structures',
    },
    {
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600',
      title: 'Built-in Bookshelves',
      category: 'Custom Cabinetry',
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      title: 'Bathroom Vanity',
      category: 'Bathroom Remodeling',
    },
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
      title: 'Crown Molding Detail',
      category: 'Finish Carpentry',
    },
    {
      image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600',
      title: 'Wooden Staircase',
      category: 'Custom Build',
    },
    {
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600',
      title: 'Home Office Built-ins',
      category: 'Custom Cabinetry',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
      title: 'Garden Pergola',
      category: 'Outdoor Structures',
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our craftsmanship through completed projects
        </p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="portfolio-item"
              onClick={() => setSelectedImage(project)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <button className="portfolio-view">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
