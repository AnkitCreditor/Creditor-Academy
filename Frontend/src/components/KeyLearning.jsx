import React from 'react';
import begin from '../assets/begin.jpg';
import how from '../assets/how.jpg';
import acting from '../assets/acting.jpg';
import understand from '../assets/understand.jpg';
import truee from '../assets/true.jpg';
import publicc from '../assets/public.jpg';
import law from '../assets/law.jpg';

const KeyLearning = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div>
      {/* Grid of Key Learnings */}
      <div style={{ 
        background: '#e8f4fd', 
        padding: '50px 20px', 
        margin: '0 auto 0px', 
        width: '100%', 
        boxSizing: 'border-box' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '25px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {/* Card 1 */}
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '5px 20px', 
            boxShadow: '0 5px 20px rgba(0,123,255,0.1)' 
          }}>
            <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}></div>
            <div style={{ marginBottom: '12px', textAlign: 'center' }}>
              <span style={{ fontWeight: 'bold', color: '#0056b3' }}>
                <img 
                  src={understand} 
                  alt="True History" 
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '12px', 
                    marginBottom: '15px' 
                  }} 
                />
                Understand Public vs Private
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#333' }}>
              See the foundational difference between public identity and your sovereign private self.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '5px 20px', 
            boxShadow: '0 5px 20px rgba(0,123,255,0.1)' 
          }}>
            <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}></div>
            <div style={{ marginBottom: '12px', textAlign: 'center' }}>
              <span style={{ fontWeight: 'bold', color: '#0056b3' }}>
                <img 
                  src={how} 
                  alt="legal" 
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '12px',
                    marginBottom: '15px'
                  }} 
                />
                How Sovereignty Was Stripped
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#333' }}>
              Understand the legal tricks and historical shifts that quietly removed your freedom.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '5px 20px', 
            boxShadow: '0 5px 20px rgba(0,123,255,0.1)' 
          }}>
            <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}></div>
            <div style={{ marginBottom: '12px', textAlign: 'center' }}>
              <span style={{ fontWeight: 'bold', color: '#0056b3' }}>
                <img 
                  src={acting} 
                  alt="operatee" 
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '12px',
                    marginBottom: '15px'
                  }} 
                />
                Acting as Public Property
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#333' }}>
              Reveal why most citizens unknowingly operate as assets of the public system.
            </p>
          </div>

          {/* Card 4 */}
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '5px 20px', 
            boxShadow: '0 5px 20px rgba(0,123,255,0.1)' 
          }}>
            <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}></div>
            <div style={{ marginBottom: '12px', textAlign: 'center' }}>
              <span style={{ fontWeight: 'bold', color: '#0056b3' }}>
                <img 
                  src={begin} 
                  alt="women" 
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '12px',
                    marginBottom: '15px'
                  }} 
                />
                Begin the Private Walk
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#333' }}>
              Get equipped to enter the next phase — living lawfully and privately, with clarity.
            </p>
          </div>
        </div>
      </div>

      {/* What You'll Learn in Sovereignty 101 - Static Responsive Version */}
      <section style={{ 
        background: '#e8f4fd', 
        padding: '60px 20px', 
        fontFamily: "'Segoe UI', sans-serif" 
      }}>
        <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
          <h2 style={{ color: '#007bff', fontSize: '2.5em', marginBottom: '40px' }}>
            <strong>
              <span style={{ color: 'rgb(126, 140, 141)' }}>What You'll Learn in</span>{' '}
              <span style={{ color: '#0056b3' }}>Sovereignty 101</span>
            </strong>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
            {/* Card 1 */}
            <div 
              style={{ 
                flex: '1 1 300px', 
                maxWidth: '300px', 
                background: 'white', 
                borderRadius: '20px', 
                padding: '25px 20px', 
                boxShadow: '0 10px 30px rgba(0,123,255,0.15)', 
                transition: '0.3s', 
                cursor: 'pointer' 
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img 
                src={truee} 
                alt="True History" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  marginBottom: '15px' 
                }} 
              />
              <h3 style={{ color: '#0056b3', marginBottom: '10px' }}>
                <strong>True American History</strong>
              </h3>
              <p style={{ fontSize: '14px', color: '#333' }}>
                Discover the real story of America: sovereignty, consent, and freedom before the corporate system took over.
              </p>
            </div>

            {/* Card 2 */}
            <div 
              style={{ 
                flex: '1 1 300px', 
                maxWidth: '300px', 
                background: 'white', 
                borderRadius: '20px', 
                padding: '25px 20px', 
                boxShadow: '0 10px 30px rgba(0,123,255,0.15)', 
                transition: '0.3s', 
                cursor: 'pointer' 
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img 
                src={publicc} 
                alt="Public vs Private" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  marginBottom: '15px' 
                }} 
              />
              <h3 style={{ color: '#0056b3', marginBottom: '10px' }}>
                <strong>Public vs Private</strong>
              </h3>
              <p style={{ fontSize: '14px', color: '#333' }}>
                Learn how your identity was turned into a legal fiction and how to stand in your true, private status.
              </p>
            </div>

            {/* Card 3 */}
            <div 
              style={{ 
                flex: '1 1 300px', 
                maxWidth: '300px', 
                background: 'white', 
                borderRadius: '20px', 
                padding: '25px 20px', 
                boxShadow: '0 10px 30px rgba(0,123,255,0.15)', 
                transition: '0.3s', 
                cursor: 'pointer' 
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img 
                src={law} 
                alt="Law & Jurisdiction" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  marginBottom: '15px' 
                }} 
              />
              <h3 style={{ color: '#0056b3', marginBottom: '10px' }}>
                <strong>Law & Jurisdiction</strong>
              </h3>
              <p style={{ fontSize: '14px', color: '#333' }}>
                Understand the shift from common law to admiralty and how modern courts operate by contract.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyLearning;