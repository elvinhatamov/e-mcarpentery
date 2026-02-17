import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '🪑',
      title: 'Custom Furniture & Cabinetry',
      description: 'Handcrafted furniture and custom cabinetry designed to perfectly fit your space and style. From elegant dining tables to bespoke storage solutions.',
    },
    {
      icon: '🏠',
      title: 'Kitchen & Bathroom Remodeling',
      description: 'Transform your kitchen and bathroom with our expert remodeling services. We handle everything from cabinet installation to complete renovations.',
    },
    {
      icon: '🌳',
      title: 'Deck & Outdoor Structures',
      description: 'Beautiful and durable outdoor living spaces including decks, pergolas, gazebos, and outdoor kitchens built to withstand the elements.',
    },
    {
      icon: '✨',
      title: 'Trim & Finish Carpentry',
      description: 'Precision trim work, crown molding, baseboards, and finishing touches that add elegance and character to your home.',
    },
    {
      icon: '🔨',
      title: 'Repairs & Renovations',
      description: 'Expert repair services for damaged woodwork, doors, windows, and structural elements. We restore your space to its former glory.',
    },
    {
      icon: '🚪',
      title: 'Custom Doors & Entries',
      description: 'Beautiful custom doors and entryways that make a lasting first impression. Interior and exterior options available.',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive carpentry solutions tailored to your needs
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-link">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
