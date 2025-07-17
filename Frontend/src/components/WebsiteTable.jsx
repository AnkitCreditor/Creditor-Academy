
import React from 'react';
import { FaLayerGroup, FaCheck } from 'react-icons/fa';

const WebsiteTable = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '30px auto',
    padding: '0 5%',
    fontFamily: "'Inter', sans-serif",
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
    fontWeight: 800,
    color: '#1a202c',
    marginBottom: '40px',
    fontFamily: "'Poppins', sans-serif",
  };

  const tableContainerStyle = {
    marginTop: '40px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '15px',
  };

  const theadStyle = {
    background: '#0284c7',
    color: '#000',
  };

  const thStyle = {
    padding: '16px 20px',
    background: 'rgb(2, 132, 199)',
    textAlign: 'center',
  };

  const thStyleSecondTable = {
    padding: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    background: 'linear-gradient(to right, rgb(2, 132, 199), rgb(14, 165, 233))',
    color: 'white',
  };

  const rowStyle = {
    borderBottom: '1px solid #eee',
    transition: 'background 0.3s',
    background: 'white',
  };

  const tdStyle = {
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
  };

  const iconContainerStyle = {
    background: '#e0f2fe',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
  };

  const textStyle = {
    fontWeight: 600,
    color: '#0c4a6e',
  };

  const centerTextStyle = {
    textAlign: 'center',
  };

  const totalRowStyle = {
    background: '#f9fafb',
    fontWeight: 600,
  };

  const promoStyle = {
    marginTop: '20px',
    marginBottom: '20px',
    background: 'linear-gradient(to right, #e0f2fe, #d4eeff)',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
  };

  const secondTableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '1rem',
    fontFamily: "'Inter', sans-serif",
  };

  const featureTdStyle = {
    padding: '20px',
    fontWeight: 600,
    color: 'rgb(12, 74, 110)',
  };

  const checkStyle = {
    color: 'rgb(71, 71, 71)',
    fontSize: '16px',
    fontFamily: "'Google Sans', Arial, sans-serif",
  };

  const crossStyle = {
    color: 'rgb(239, 68, 68)',
    fontSize: '1.2rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        What <span style={{ color: '#0284c7' }}>Creditor Academy</span> Offers
      </h2>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead style={theadStyle}>
            <tr>
              <th style={thStyle}>
                <h3 style={{ color: 'rgb(255, 255, 255)' }} aria-label="Website Components">
                  <strong>Website Components</strong>
                </h3>
              </th>
              <th style={thStyle}>
                <h3 style={{ color: 'rgb(255, 255, 255)' }} aria-label="Other Professionals">
                  <strong>Other Professionals</strong>
                </h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={tdStyle}>
                <div style={iconContainerStyle}>
                  <FaLayerGroup size={18} color="#0369a1" />
                </div>
                <div style={textStyle}>Logo Design</div>
              </td>
              <td style={centerTextStyle}>$400</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={tdStyle}>
                <div style={iconContainerStyle}>
                  <FaLayerGroup size={18} color="#0369a1" />
                </div>
                <div style={textStyle}>UI/UX Design</div>
              </td>
              <td style={centerTextStyle}>$500</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={tdStyle}>
                <div style={iconContainerStyle}>
                  <FaLayerGroup size={18} color="#0369a1" />
                </div>
                <div style={textStyle}>Membership Login</div>
              </td>
              <td style={centerTextStyle}>$800</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={tdStyle}>
                <div style={iconContainerStyle}>
                  <FaLayerGroup size={18} color="#0369a1" />
                </div>
                <div style={textStyle}>Policy Pages</div>
              </td>
              <td style={centerTextStyle}>$1200</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={tdStyle}>
                <div style={iconContainerStyle}>
                  <FaLayerGroup size={18} color="#0369a1" />
                </div>
                <div style={textStyle}>Bank Credit Approval</div>
              </td>
              <td style={centerTextStyle}>NA</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={tdStyle}>
                <div style={iconContainerStyle}>
                  <FaLayerGroup size={18} color="#0369a1" />
                </div>
                <div style={textStyle}>Hosting & Deployment</div>
              </td>
              <td style={centerTextStyle}>$400</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={tdStyle}>
                <div style={iconContainerStyle}>
                  <FaLayerGroup size={18} color="#0369a1" />
                </div>
                <div style={textStyle}>Maintenance</div>
              </td>
              <td style={centerTextStyle}>$300</td>
            </tr>
            <tr style={totalRowStyle}>
              <td style={{ padding: '16px 20px' }}>Total Market Cost</td>
              <td style={centerTextStyle}>$4000</td>
            </tr>
          </tbody>
        </table>
        <div style={promoStyle}>
          <h3 style={{ fontSize: '1.75rem', margin: 0, color: '#1a202c', fontWeight: 'bold', fontFamily: "'Poppins', sans-serif" }}>
            Choose the <span style={{ color: '#0284c7' }}>Basic Plan</span> and Save Over $3900!
          </h3>
          <p style={{ fontSize: '1.1rem', marginTop: '12px', color: '#4a5568', fontFamily: "'Inter', sans-serif" }}>
            Get starter features for <strong style={{ color: '#0284c7', fontSize: '1.2rem' }}>just $100 + $49 Monthly</strong> — No hidden costs!
          </p>
        </div>
        <table style={secondTableStyle}>
          <thead>
            <tr>
              <th style={{ ...thStyleSecondTable, textAlign: 'left' }} aria-label="Feature">
                Feature
              </th>
              <th style={thStyleSecondTable} aria-label="$100 Starter Plan">
                $100 Starter Plan
              </th>
              <th style={thStyleSecondTable} aria-label="$1000 Cadillac Plan">
                $1000 Cadillac Plan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Number of Pages</td>
              <td style={centerTextStyle}>2-3 pages</td>
              <td style={centerTextStyle}>5-7+ custom pages</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Custom Logo</td>
              <td style={centerTextStyle}>Basic text/logo</td>
              <td style={centerTextStyle}>Premium design with revisions</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Policy Pages</td>
              <td style={centerTextStyle}>Basic templates</td>
              <td style={centerTextStyle}>Custom-written & formatted</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Contact Form</td>
              <td style={centerTextStyle}>Basic with auto-email</td>
              <td style={centerTextStyle}>Advanced with CRM sync</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>UI/UX Design</td>
              <td style={centerTextStyle}>Clean layout</td>
              <td style={centerTextStyle}>Brand-aligned premium design</td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Security (SSL)</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅ HTTPS</span>
              </td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅ HTTPS + Extra layers</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Detail User Dashboard</td>
              <td style={{ ...centerTextStyle, ...crossStyle }}>❌</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Underwriter-Ready Structure</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Mobile Responsive</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Hosting & Maintenance</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅ Monthly</span>
              </td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅ Monthly</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Member Login/Portal</td>
              <td style={{ ...centerTextStyle, ...crossStyle }}>❌</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Backend Integration</td>
              <td style={{ ...centerTextStyle, ...crossStyle }}>❌</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅ Admin/CMS</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Blog/Resource Section</td>
              <td style={{ ...centerTextStyle, ...crossStyle }}>❌</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Chatbot/Live Chat</td>
              <td style={{ ...centerTextStyle, ...crossStyle }}>❌</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Appointment Booking</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅</span>
              </td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅ (e.g., Calendly)</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>SEO Optimization</td>
              <td style={{ ...centerTextStyle, ...crossStyle }}>❌</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅ Basic SEO setup</span>
              </td>
            </tr>
            <tr
              style={rowStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f0f9ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <td style={featureTdStyle}>Client Training/Walkthrough</td>
              <td style={{ ...centerTextStyle, ...crossStyle }}>❌</td>
              <td style={centerTextStyle}>
                <span style={checkStyle}>✅ One-time call</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebsiteTable;