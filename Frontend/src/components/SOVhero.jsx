import React from 'react';
import sovbanner from '../assets/Sov_101_football.png';

const SOVhero = () => {
  const handleButtonClick = () => {
    window.open('https://www.creditoracademy.com/page/show/153616?portal_id=14800', '_blank');
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
  };

  return (
    <div>
      {/* Banner Image */}
      <div style={{ width: '100%', height: '450px', position: 'relative', overflow: 'hidden' }}>
        <img 
          src={sovbanner} 
          alt="Sovereignty 101 Banner" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            objectFit: 'cover', 
            display: 'block', 
            borderRadius: '8px' 
          }} 
        />
      </div>

      {/* Enroll Now Button Only */}
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <button 
          style={{ 
            display: 'inline-block', 
            background: '#1890FF', 
            color: 'white', 
            padding: '18px 40px', 
            textDecoration: 'none', 
            borderRadius: '10px', 
            fontSize: '1.3rem', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)', 
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, opacity 0.3s ease', 
            opacity: '1', 
            cursor: 'pointer', 
            border: 'none' 
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleButtonClick}
        >
          Sign up at $69/month
        </button>
      </div>

      {/* Main Title and Intro Section */}
      <div style={{ 
        padding: '50px 10%', 
        textAlign: 'center', 
        backgroundColor: '#ffffff', 
        fontFamily: "'Poppins', sans-serif" 
      }}>
        <h1 style={{ 
          fontSize: '2.8rem', 
          fontWeight: 'bold', 
          color: '#2c3e50', 
          marginBottom: '10px' 
        }}>
          <span style={{ color: 'rgb(0, 86, 179)' }}>Sovereignty 101:</span>{' '}
          <span style={{ color: 'rgb(52, 73, 94)' }}>The True American History They Hide from You</span>
        </h1>
        <p style={{ 
          fontSize: '1.4rem', 
          fontWeight: '500', 
          color: '#5dade2', 
          marginBottom: '30px' 
        }}>
          "Learn the Law. Know the Difference."
        </p>
      </div>

      {/* Section: Course Introduction Video */}
      <section style={{ 
        padding: '80px 5%', 
        background: 'linear-gradient(135deg, #e6f0ff, #f8fbff)', 
        fontFamily: "'Segoe UI', sans-serif", 
        textAlign: 'center' 
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#1e293b', 
          marginBottom: '20px' 
        }}>
          <strong>
            <span style={{ color: 'rgb(0, 86, 179)' }}>Course Introduction Video</span>
          </strong>
        </h2>
        <p style={{ 
          fontSize: '1.15rem', 
          color: '#475569', 
          maxWidth: '700px', 
          margin: '0 auto 40px' 
        }}>
          Take a quick look inside the Sovereignty 101 course — and discover what makes it unlike anything you've seen before.
        </p>
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '960px', 
          margin: '0 auto', 
          borderRadius: '20px', 
          overflow: 'hidden', 
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' 
        }}>
          <div style={{ position: 'relative', paddingTop: '56.25%', height: '0' }}>
            <iframe 
              width="560" 
              height="314" 
              style={{ 
                position: 'absolute', 
                top: '0', 
                left: '0', 
                width: '100%', 
                height: '100%', 
                border: 'none' 
              }} 
              src="https://drive.google.com/file/d/1QTHHHN1sHxigRdkXnyIX9eZ8Gr4gNBAq/preview" 
              title="Sovereignty 101 Course Introduction"
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SOVhero;