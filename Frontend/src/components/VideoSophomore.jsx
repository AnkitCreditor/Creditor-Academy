import React from 'react';

const features = [
  '24 Live Classes with Coach Mr. Rowland',
  '52 On-Demand Studio Lessons',
  'Powerful World-Class LMS',
  'Personal Studio Avatar to Guide You',
  'Downloadable Trust Templates + UCC Forms',
  'Real-Time Chatbot',
  'Law Comics + Game-Based Quizzes',
  'Private ID'
];

const icons = [
  'user', 'file-text', 'smile', 'zap', 'book', 'message-circle', 'edit', 'shield'
]; // Icons for illustrative purposes

const EverythingYouGet = () => {
  return (
    <>
      {/* Video Embed */}
      <div style={{
        width: '100%',
        maxWidth: 960,
        margin: '40px auto',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
      }}>
        <div style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            src="https://www.youtube.com/embed/o_fQSOM2dtw"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="SPC Video"
          ></iframe>
        </div>
      </div>

      {/* Everything You Get Section */}
      <section style={{
        padding: '80px 8%',
        background: '#fff',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: 'auto',
          background: 'linear-gradient(to bottom right, #f0f4f8, #ffffff)',
          padding: '60px 50px',
          borderRadius: 25,
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.6rem',
            color: '#1a202c',
            fontWeight: 'bold',
            marginBottom: 15
          }}>
            <span style={{ color: 'rgb(0, 86, 179)' }}>Everything You Get</span>
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#4b5563',
            fontSize: '1.1rem',
            marginBottom: 60
          }}>
            A fully immersive learning experience to help you lawfully reclaim your standing.
          </p>

          {/* Grid of Features */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 30
          }}>
            {features.map((feature, i) => (
              <div key={i} style={{
                background: '#ffffff',
                padding: '25px 24px',
                borderRadius: 18,
                boxShadow: '0 12px 35px rgba(0,0,0,0.06)',
                display: 'flex',
                gap: 16
              }}>
                <div style={{ flexShrink: 0 }}>
                  {/* Placeholder for icon */}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9 14s1.5 2 3 2 3-2 3-2"></path>
                    <path d="M9 9h.01"></path>
                    <path d="M15 9h.01"></path>
                  </svg>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#1a2e55'
                }}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EverythingYouGet;