import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PartySop from '../assets/PartySop.jpg';
import StatusSop from '../assets/StatusSop.jpg';

const StatusCorrection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      title: 'Status Correction',
      image: StatusSop
    },
    {
      title: 'Secured Party Creditor Processes',
      image: PartySop
    },
  ];

  return (
    <section style={{
      padding: '40px 8%',
      background: 'linear-gradient(135deg, #eef5ff 0%, #f8fbff 100%)',
      fontFamily: "'Poppins', sans-serif",
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.6rem',
            color: '#1a2b5f',
            fontWeight: 'bold',
            marginBottom: '15px',
            letterSpacing: '-0.5px',
          }}>
            <span style={{ color: 'rgb(0, 86, 179)' }}>SPC + Status Correction Mastery</span>
          </h2>
          <p style={{
            color: '#5a6a85',
            fontSize: '1.1rem',
            maxWidth: '700px',
            margin: '0 auto 55px',
            lineHeight: '1.6',
          }}>
            Go step-by-step through every lawful declaration, filing, and notarization to correct your status and secure your estate.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
        }}>
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '4 / 3',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 15px 30px',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '50%',
                background: 'rgba(0, 86, 179, 0.4)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 15px',
                textAlign: 'center',
                fontSize: '1.3rem',
                fontWeight: 600,
              }}>
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatusCorrection;
