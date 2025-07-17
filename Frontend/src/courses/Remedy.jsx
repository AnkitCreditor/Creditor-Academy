import React, { useEffect, useState } from 'react';
import remedyBanner from '../assets/iwrn_banner.png'; // adjust path
import flexImage from '../assets/flex.jpg'; // add this image to your assets folder
import RemedyOfferSection from '../components/RemedyOfferSection';
import GameBanner from '../components/GameBanner';
import RemedyMaster from '../components/RemedyMaster';
import RemedyResult from '../components/RemedyResult';

const Remedy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s ease-out',
  };

  const sectionStyle = {
    padding: '80px 6%',
    background: '#f4f6f8',
    fontFamily: "'Poppins', sans-serif",
  };

  const contentGridStyle = {
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '50px',
    ...fadeInStyle,
  };

  const imageContainerStyle = {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '434px',
    borderRadius: '14px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 24px',
  };

  const textContainerStyle = {
    flex: 1,
    minWidth: '300px',
  };

  const boxStyle = {
    background: '#ffffff',
    borderLeft: '4px solid #3498db',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
    fontSize: '0.95rem',
    color: '#2c3e50',
    lineHeight: '1.6',
  };

  return (
    <>
      {/* Banner Image */}
      <section>
        <div style={{ width: '100%', height: 'auto', position: 'relative', overflow: 'hidden' }}>
          <img
            src={remedyBanner}
            alt="I Want Remedy Now Banner"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '8px'
            }}
          />
        </div>
      </section>

      {/* Remedy Video Section */}
      <section style={{
        padding: '80px 6%',
        background: 'linear-gradient(to right, #eef5ff, #ffffff)',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0056b3', marginBottom: '20px', lineHeight: '1.4' }}>
            <span style={{ color: '#3598db', fontWeight: 'bold' }}>I WANT A REMEDY NOW <span style={{ color: '#3598db' }}>!!</span></span>
          </h2>
          <p style={{ color: '#595f66', fontSize: '1.1rem', marginTop: '10px' }}>
            Restore Your Credit. Discharge Debt. Take Your Power Back.
          </p>
        </div>

        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '40px auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
        }}>
          <div style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
            <iframe
              src="https://drive.google.com/file/d/1nzMTFFILh8d21_FUF0VuD9I0kJiLVMCp/preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Remedy Video"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Take Your Power Back Section */}
      <section style={sectionStyle}>
        <div style={contentGridStyle}>
          {/* Left Image */}
          <div style={imageContainerStyle}>
            <img src={flexImage} alt="Take Your Power Back" style={imageStyle} />
          </div>

          {/* Right Text Content */}
          <div style={textContainerStyle}>
            <div style={boxStyle}>
              <p style={{ margin: 0 }}>
                <strong>Tired of Being Denied, Deceived, or Drowned in Debt?</strong><br /><br />
                You’re not the problem — the system is rigged.<br /><br />
                But now… <strong>you hold the remedy</strong>.<br /><br />
                This isn’t another “credit repair” scheme.<br />
                It’s <strong>legal, psychological, and spiritual financial warfare</strong> — built to liberate you from the contracts and collections that trap millions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <RemedyOfferSection />
      <GameBanner/>
      <RemedyMaster/>
      <RemedyResult/>
    </>
  );
};

export default Remedy;
