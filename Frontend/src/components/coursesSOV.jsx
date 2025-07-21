import React from 'react';
import {
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
  FaRobot,
  FaVideo,
  FaFileDownload,
  FaUserAltSlash,
  FaStar,
  FaListUl,
  FaBookReader,
  FaChalkboardTeacher
} from 'react-icons/fa';
import chess from '../assets/chess.jpg';

const CoursesSOV = () => {
  // Animation handler for cards
  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 15px 30px rgba(52, 152, 219, 0.2)';
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.1)';
  };

  // Animation handler for list items
  const handleItemHover = (e) => {
    e.currentTarget.style.transform = 'translateX(5px)';
    e.currentTarget.style.backgroundColor = '#f8fafc';
  };

  const handleItemLeave = (e) => {
    e.currentTarget.style.transform = 'translateX(0)';
    e.currentTarget.style.backgroundColor = '#ffffff';
  };

  return (
    <div>
      {/* Course Details Section */}
      <section style={{ 
        padding: '80px 5%', 
        background: 'linear-gradient(to bottom, #f8f9fa, #eef5ff)', 
        fontFamily: "'Poppins', sans-serif", 
        textAlign: 'center', 
        width: '100%', 
        boxSizing: 'border-box' 
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
            color: '#2c3e50', 
            marginBottom: '50px', 
            position: 'relative', 
            display: 'inline-block' 
          }}>
            <span style={{ color: 'rgb(0, 86, 179)' }}>
              <strong>Course Details </strong>
            </span>
            <span style={{ 
              position: 'absolute', 
              bottom: '-15px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              width: '80px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #5DADE2, #3498db)', 
              borderRadius: '2px' 
            }}></span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '25px', 
            marginBottom: '60px' 
          }}>
            {/* Card 1 */}
            <div 
              style={{ 
                background: 'white', 
                padding: '30px', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)', 
                borderTop: '4px solid #5DADE2',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={{ marginBottom: '15px' }}>
                <FaCalendarAlt style={{ color: '#5dade2', fontSize: '40px' }} />
              </div>
              <h3 style={{ margin: '0 0 10px', color: '#2c3e50', fontSize: '1.3rem' }}>
                3 Month Program
              </h3>
              <p style={{ color: '#7f8c8d' }}>Comprehensive journey to sovereignty.</p>
            </div>
            
            {/* Card 2 */}
            <div 
              style={{ 
                background: 'white', 
                padding: '30px', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)', 
                borderTop: '4px solid #3498db',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={{ marginBottom: '15px' }}>
                <FaUsers style={{ color: '#3498db', fontSize: '40px' }} />
              </div>
              <h3 style={{ margin: '0 0 10px', color: '#2c3e50', fontSize: '1.3rem' }}>
                24 Live Sessions
              </h3>
              <p style={{ color: '#7f8c8d' }}>Weekly training with Coach Mr. Rowland.</p>
            </div>
            
            {/* Card 3 */}
            <div 
              style={{ 
                background: 'white', 
                padding: '30px', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)', 
                borderTop: '4px solid #5DADE2',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={{ marginBottom: '15px' }}>
                <FaGraduationCap style={{ color: '#5dade2', fontSize: '40px' }} />
              </div>
              <h3 style={{ margin: '0 0 10px', color: '#2c3e50', fontSize: '1.3rem' }}>
                Graduate Certified
              </h3>
              <p style={{ color: '#7f8c8d' }}>Earn your Private ID</p>
            </div>
            
            {/* Card 4 */}
            <div 
              style={{ 
                background: 'white', 
                padding: '30px', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)', 
                borderTop: '4px solid #3498db',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={{ marginBottom: '15px' }}>
                <FaRobot style={{ color: '#3498db', fontSize: '40px' }} />
              </div>
              <h3 style={{ margin: '0 0 10px', color: '#2c3e50', fontSize: '1.3rem' }}>
                Sovereignty Chatbot
              </h3>
              <p style={{ color: '#7f8c8d' }}>24/7 support & instant guidance via AI chatbot.</p>
            </div>
            
            {/* Card 5 */}
            <div 
              style={{ 
                background: 'white', 
                padding: '30px', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)', 
                borderTop: '4px solid #5dade2',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={{ marginBottom: '15px' }}>
                <FaVideo style={{ color: '#5dade2', fontSize: '40px' }} />
              </div>
              <h3 style={{ margin: '0 0 10px', color: '#2c3e50', fontSize: '1.3rem' }}>
                65 Self-Paced Lessons
              </h3>
              <p style={{ color: '#7f8c8d' }}>Learn at your own pace with studio avatars.</p>
            </div>
            
            {/* Card 6 */}
            <div 
              style={{ 
                background: 'white', 
                padding: '30px', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)', 
                borderTop: '4px solid #3498db',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={{ marginBottom: '15px' }}>
                <FaFileDownload style={{ color: '#3498db', fontSize: '40px' }} />
              </div>
              <h3 style={{ margin: '0 0 10px', color: '#2c3e50', fontSize: '1.3rem' }}>
                Downloadable Resources
              </h3>
              <p style={{ color: '#7f8c8d' }}>Templates & notes to support your private walk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This Course For? Section */}
      <section style={{ 
        padding: '60px 5%', 
        background: 'linear-gradient(135deg, #f9fafb, #eef2f7)', 
        fontFamily: "'Segoe UI', sans-serif" 
      }}>
        <h2 style={{ 
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
          color: '#1a202c', 
          textAlign: 'center', 
          marginBottom: '40px', 
          fontWeight: 'bold' 
        }}>
          <span style={{ color: 'rgb(0, 86, 179)' }}>Who Is This Course For?</span>
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px', 
          alignItems: 'center', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {/* Left Column: Points */}
          <div>
            {/* Card 1 */}
            <div 
              style={{ 
                background: '#ffffff', 
                padding: '20px', 
                marginBottom: '16px', 
                borderRadius: '12px', 
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', 
                display: 'flex', 
                gap: '14px', 
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <FaUserAltSlash style={{ color: '#4a90e2', fontSize: '24px', flexShrink: 0 }} />
              <span>Anyone confused about sovereignty or "going private"</span>
            </div>
            
            {/* Card 2 */}
            <div 
              style={{ 
                background: '#ffffff', 
                padding: '20px', 
                marginBottom: '16px', 
                borderRadius: '12px', 
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', 
                display: 'flex', 
                gap: '14px', 
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <FaStar style={{ color: '#f39c12', fontSize: '24px', flexShrink: 0 }} />
              <span>Patriots who feel something isn't right with the system</span>
            </div>
            
            {/* Card 3 */}
            <div 
              style={{ 
                background: '#ffffff', 
                padding: '20px', 
                marginBottom: '16px', 
                borderRadius: '12px', 
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', 
                display: 'flex', 
                gap: '14px', 
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <FaListUl style={{ color: '#27ae60', fontSize: '24px', flexShrink: 0 }} />
              <span>Students who want <strong>truth before paperwork</strong></span>
            </div>
            
            {/* Card 4 */}
            <div 
              style={{ 
                background: '#ffffff', 
                padding: '20px', 
                marginBottom: '16px', 
                borderRadius: '12px', 
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', 
                display: 'flex', 
                gap: '14px', 
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <FaBookReader style={{ color: '#9b59b6', fontSize: '24px', flexShrink: 0 }} />
              <span>Private-minded individuals who want to prepare correctly</span>
            </div>
            
            {/* Card 5 */}
            <div 
              style={{ 
                background: '#ffffff', 
                padding: '20px', 
                borderRadius: '12px', 
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', 
                display: 'flex', 
                gap: '14px', 
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <FaChalkboardTeacher style={{ color: '#e74c3c', fontSize: '24px', flexShrink: 0 }} />
              <span>Leaders ready to teach others the true history of this nation</span>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <img 
              src={chess} 
              alt="Sovereignty Representation" 
              style={{ 
                width: '100%', 
                maxWidth: '500px',
                height: 'auto',
                objectFit: 'cover', 
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesSOV;