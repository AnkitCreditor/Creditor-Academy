import React from 'react';
import './AboutSection.css'; // We'll create this CSS file next

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Left: Video */}
      <div className="about-video-container">
        <div className="video-wrapper">
          <iframe 
            width="100%" 
            height="315" 
            src="https://drive.google.com/file/d/1jUjnrebq_Z6jy64RWnIZqAHjD6JEfW9Y/preview" 
            allow="autoplay"
            title="Creditor Academy Video"
          ></iframe>
        </div>
      </div>
      
      {/* Right: About Text */}
      <div className="about-text-container">
        <h2 className="about-title">
          <span className="title-accent">About</span> Creditor Academy
          <span className="title-underline"></span>
        </h2>
        <p className="about-description">
          At Creditor Academy, we equip individuals and entrepreneurs with the knowledge to unlock the full power of the "Private" operating outside the public system, which means more control, more protection, and more opportunity. Our educational platform & Instructors empower you to structure your life and business for maximum privacy, asset protection, and true independence. This is where knowledge becomes sovereignty, because real freedom begins in the Private.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;