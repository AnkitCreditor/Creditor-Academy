import React from 'react';
import masterclassBanner from '../assets/masterclass_football.png';
import './MasterclassBanner.css';

const MasterclassBanner = () => {
  return (
    <section className="masterclass-banner-container">
      <div className="masterclass-banner-wrapper">
        {/* Banner Image */}
        <img 
          src={masterclassBanner} 
          alt="Masterclass Football Banner" 
          className="masterclass-banner-image"
        />
        
        {/* Text and CTA */}
        <div className="masterclass-banner-content">
          <p className="masterclass-subtitle">
            Everything You Need to Go Private — All in One Place
          </p>
          <a 
            href="https://www.creditoracademy.com/page/show/152454?portal_id=14800" 
            className="masterclass-cta-button"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default MasterclassBanner;