
import React from 'react';
import { FaCheckCircle, FaCheck } from 'react-icons/fa';
import SEOoptimized from '../assets/SEOoptimized.jpg';
import BusinessFunctionality from '../assets/BusinessFunctionality.jpg';
import MonthlyMaintainance from '../assets/MonthlyMaintainance.jpg';
import CustomWebsite from '../assets/CustomWebsite.jpg';

const WebsiteEndSection = () => {
  const sectionStyle = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    padding: '100px 5%',
  };

  const headingContainerStyle = {
    textAlign: 'center',
    marginBottom: '80px',
  };

  const headingStyle = {
    fontSize: 'clamp(2.2rem, 4vw, 3rem)',
    color: '#1a202c',
    marginBottom: '25px',
    fontWeight: 800,
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
    display: 'inline-block',
  };

  const subHeadingStyle = {
    fontSize: '1.15rem',
    color: '#64748b',
    maxWidth: '700px',
    margin: '0 auto',
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.7,
  };

  const cardContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto 80px',
    gap: '60px',
    flexWrap: 'wrap',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageContainerStyle = {
    flex: 1,
    minWidth: '300px',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '25px',
    left: '25px',
    background: 'rgba(59, 130, 246, 0.95)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '25px',
    fontWeight: 600,
    fontSize: '0.95rem',
  };

  const contentContainerStyle = {
    flex: 1,
    minWidth: '300px',
    padding: '50px',
  };

  const featureHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  };

  const featureTitleStyle = {
    fontSize: '2rem',
    margin: 0,
    fontWeight: 800,
    color: '#1e293b',
    fontFamily: "'Poppins', sans-serif",
  };

  const listStyle = {
    fontSize: '1.1rem',
    color: '#475569',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'flex-start',
  };

  const checkIconStyle = {
    marginRight: '15px',
    flexShrink: 0,
    marginTop: '3px',
  };

  const dividerStyle = {
    marginTop: '35px',
  };

  const whyChooseSectionStyle = {
    padding: '120px 5%',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    position: 'relative',
    overflow: 'hidden',
  };

  const cardStyle = {
    flex: '0 0 auto',
    width: '360px',
    position: 'relative',
    height: '360px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.4s ease',
  };

  const cardBackgroundStyle = {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardContentStyle = {
    position: 'absolute',
    bottom: 0,
    padding: '30px',
    width: '100%',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
  };

  const ctaSectionStyle = {
    position: 'relative',
    padding: '140px 5%',
    background: 'linear-gradient(90deg, #62cff4, #30a1e3)',
    overflow: 'hidden',
    textAlign: 'center',
  };

  const ctaContentStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '900px',
    margin: '0 auto',
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(20px, 20px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
      {/* What's Included Section */}
      <section style={sectionStyle}>
        <div style={headingContainerStyle}>
          <h3 style={headingStyle} aria-label="What's Included">
            What's <span style={{ color: '#3598db' }}>Included</span>
            <svg style={{ position: 'absolute', bottom: '-15px', left: 0, width: '100%' }} viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 Q100,25 200,10" stroke="#3598db" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </h3>
          <p style={subHeadingStyle}>Everything you need for a powerful online presence, crafted with precision and care.</p>
        </div>
        {/* Custom Website Design */}
        <div style={cardContainerStyle}>
          <div style={imageContainerStyle}>
            <img
              src={CustomWebsite}
              alt="Custom Design"
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={badgeStyle}>Premium Feature</div>
          </div>
          <div style={contentContainerStyle}>
            <div style={featureHeaderStyle}>
              <FaCheckCircle size={44} color="#3b82f6" style={{ marginRight: '15px' }} />
              <h4 style={featureTitleStyle}>
                Custom <span style={{ color: '#3b82f6' }}>Website Design</span>
              </h4>
            </div>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Unique layout tailored to your brand with creative direction.</span>
              </li>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Fully responsive across all devices with adaptive design.</span>
              </li>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Clean, modern design optimized for maximum user engagement.</span>
              </li>
            </ul>
            <div style={dividerStyle}>
              <svg width="100%" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,10 150,5 T300,5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
        {/* Monthly Maintenance */}
        <div style={{ ...cardContainerStyle, flexDirection: 'row-reverse' }}>
          <div style={imageContainerStyle}>
            <img
              src={MonthlyMaintainance}
              alt="Maintenance"
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{ ...badgeStyle, background: 'rgba(239, 68, 68, 0.95)', right: '25px', left: 'auto' }}>Essential</div>
          </div>
          <div style={contentContainerStyle}>
            <div style={featureHeaderStyle}>
              <FaCheckCircle size={44} color="#ef4444" style={{ marginRight: '15px' }} />
              <h4 style={featureTitleStyle}>
                Monthly <span style={{ color: '#ef4444' }}>Maintenance</span>
              </h4>
            </div>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Regular updates and automated backups for peace of mind.</span>
              </li>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>24/7 security monitoring and threat prevention.</span>
              </li>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Performance optimization and priority technical support.</span>
              </li>
            </ul>
            <div style={dividerStyle}>
              <svg width="100%" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,10 150,5 T300,5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
        {/* Business Functionality */}
        <div style={cardContainerStyle}>
          <div style={imageContainerStyle}>
            <img
              src={BusinessFunctionality}
              alt="Functionality"
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{ ...badgeStyle, background: 'rgba(16, 185, 129, 0.95)' }}>Growth Focused</div>
          </div>
          <div style={contentContainerStyle}>
            <div style={featureHeaderStyle}>
              <FaCheckCircle size={44} color="#10b981" style={{ marginRight: '15px' }} />
              <h4 style={featureTitleStyle}>
                Business <span style={{ color: '#10b981' }}>Functionality</span>
              </h4>
            </div>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Interactive contact forms with spam protection.</span>
              </li>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Seamless social media integration and sharing.</span>
              </li>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Google Maps integration and live chat widgets.</span>
              </li>
            </ul>
            <div style={dividerStyle}>
              <svg width="100%" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,10 150,5 T300,5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
        {/* SEO Optimized */}
        <div style={{ ...cardContainerStyle, flexDirection: 'row-reverse' }}>
          <div style={imageContainerStyle}>
            <img
              src={SEOoptimized}
              alt="SEO Structure"
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{ ...badgeStyle, background: 'rgba(245, 158, 11, 0.95)', right: '25px', left: 'auto' }}>Visibility Boost</div>
          </div>
          <div style={contentContainerStyle}>
            <div style={featureHeaderStyle}>
              <FaCheckCircle size={44} color="#f59e0b" style={{ marginRight: '15px' }} />
              <h4 style={featureTitleStyle}>
                SEO <span style={{ color: '#f59e0b' }}>Optimized</span>
              </h4>
            </div>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Blazing fast page loads for better rankings.</span>
              </li>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Semantic HTML5 markup and optimized metadata.</span>
              </li>
              <li style={listItemStyle}>
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>SEO-friendly URLs and content structure.</span>
              </li>
            </ul>
            <div style={dividerStyle}>
              <svg width="100%" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,10 150,5 T300,5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Our Service Section */}
      <section style={whyChooseSectionStyle}>
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="1.5" fill="#e2e8f0" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
        <div style={{ ...headingContainerStyle, position: 'relative', zIndex: 1 }}>
          <h3 style={headingStyle} aria-label="Why Choose Our Service">
            Why Choose <span style={{ color: '#3598db' }}>Our Service?</span>
            <svg style={{ position: 'absolute', bottom: '-20px', left: 0, width: '100%' }} viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 Q100,25 200,10" stroke="#3598db" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </h3>
          <p style={subHeadingStyle}>Premium web solutions designed to elevate your business and outperform competitors.</p>
        </div>
        <div style={{ display: 'flex', gap: '40px', minWidth: 'max-content' }}>
          {/* SEO Optimization */}
          <div
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${SEOoptimized})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>SEO Optimization</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Boost rankings and get discovered with our expert SEO strategies.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Visibility</div>
          </div>
          {/* Mobile-Friendly Design */}
          <div
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${BusinessFunctionality})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Mobile-Friendly Design</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Seamless design across all devices for a flawless user experience.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Responsive</div>
          </div>
          {/* Custom Branding */}
          <div
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${CustomWebsite})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Custom Branding</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Reflect your mission with branding that stands out and inspires.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Brand Identity</div>
          </div>
          {/* Strong Online Presence */}
          <div
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${BusinessFunctionality})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Strong Online Presence</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Build credibility with a professional and consistent web presence.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Credibility</div>
          </div>
          {/* Secure Hosting */}
          <div
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${MonthlyMaintainance})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Secure Hosting</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Your website is hosted with security and reliability in mind.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Security</div>
          </div>
          {/* Ongoing Support */}
          <div
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${MonthlyMaintainance})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Ongoing Support</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Our team is here to assist you long after your site launches.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Support</div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="wave" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q12.5 25 25 50 T50 50 T75 50 T100 50 T125 50" stroke="rgba(255,255,255,0.15)" fill="none" strokeWidth="2.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#wave)" opacity="0.6" />
          </defs>
        </svg>
        <div style={{ position: 'absolute', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)', top: '-60px', left: '-60px', filter: 'blur(60px)', borderRadius: '50%', animation: 'float 12s infinite ease-in-out' }} />
        <div style={{ position: 'absolute', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)', bottom: '-120px', right: '-120px', filter: 'blur(70px)', borderRadius: '50%', animation: 'float 18s infinite ease-in-out reverse' }} />
        <div style={ctaContentStyle}>
          <h3 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '25px', lineHeight: 1.4, fontFamily: "'Poppins', sans-serif" }} aria-label="Ready to Transform Your Online Presence">
            Ready to <span style={{ background: 'linear-gradient(to right, #ffffff, #d4eeff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Transform</span> Your Online Presence?
          </h3>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.95)', marginBottom: '50px', lineHeight: 1.8, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', fontFamily: "'Inter', sans-serif" }}>
            Let's build a powerful digital experience that drives results and delights your audience.
          </p>
        </div>
      </section>
    </>
  );
};

export default WebsiteEndSection;
