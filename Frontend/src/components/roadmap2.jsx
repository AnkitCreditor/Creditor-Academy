import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiBookOpen, FiShield, FiHome, FiUsers, FiDollarSign } from 'react-icons/fi';

const RoadmapStepTwo = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Header Section - Right Aligned */}
      <div style={{
        marginBottom: '40px',
        borderBottom: '2px solid #e0e7ff',
        paddingBottom: '20px',
        width: '100%'
      }}>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end', // Aligns content to the right
            alignItems: 'flex-end',
            marginBottom: '10px',
            width: '100%'
            }}>
            <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                fontSize: 'clamp(24px, 5vw, 36px)',
                fontWeight: 700,
                color: '#1e3a8a',
                margin: 0,
                textAlign: 'right' // Right-align the text
                }}
            >
                Operate Private
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                fontSize: 'clamp(60px, 15vw, 120px)',
                fontWeight: 800,
                color: '#3b82f6',
                lineHeight: 0.8,
                marginLeft: '20px' // Space between text and number
                }}
            >
                2
            </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: 'clamp(14px, 4vw, 18px)',
            color: '#4b5563',
            textAlign: 'right',
            margin: 0
          }}
        >
          Protect Your Assets & Run Your Business in the Private
        </motion.p>
      </div>

      {/* Course Cards - Stack on mobile */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {/* Become Private Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{
            height: '140px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: '4px 8px',
              borderRadius: '20px',
              color: 'white',
              fontSize: '12px',
              fontWeight: 600
            }}>
              Course
            </div>
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <FiBookOpen style={{ fontSize: '32px', marginBottom: '8px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Become Private</h3>
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              lineHeight: 1.5,
              marginBottom: '15px'
            }}>
              Reclaim your legal identity and exit the public system through status correction.
            </p>
            <a href="/become-private" style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none'
            }}>
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Course Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#f0f9ff',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          borderLeft: '4px solid #3b82f6'
        }}
      >
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#1e3a8a',
          margin: 0
        }}>
          This powerful course teaches you how to build business trusts, create PMAs (Private Membership Associations), and operate without state oversight. You'll learn how to structure businesses, real estate, and commerce in the private, away from contracts that expose you to liability and control.
        </p>
      </motion.div>

      {/* Content Sections - Stack on mobile */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        marginBottom: '40px'
      }}>
        {/* What You'll Learn Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#1e3a8a',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <FiShield style={{ color: '#3b82f6' }} />
            What You'll Learn:
          </motion.h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '12px'
          }}>
            {[
              "Set up and operate a UBOT business trust",
              "Create lawful PMAs for private services, coaching, or healing",
              "Hold real estate in private trust structures",
              "Build intergenerational estate protection and privacy",
              "Operate outside the UCC and statutory commercial codes"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '12px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                    flexShrink: 0
                  }}>
                    <FiCheckCircle style={{ color: '#3b82f6', fontSize: '12px' }} />
                  </div>
                  <span style={{ color: '#4b5563', fontSize: '14px' }}>{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Models Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#1e3a8a',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <FiDollarSign style={{ color: '#3b82f6' }} />
            Business Models You Can Launch:
          </motion.h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '12px'
          }}>
            {[
              { icon: <FiHome />, title: "Real Estate Holding", desc: "Leasing via Trusts" },
              { icon: <FiUsers />, title: "Wellness PMAs", desc: "Healing & Therapy" },
              { icon: <FiBookOpen />, title: "Private Education", desc: "Homeschools & Coaching" },
              { icon: <FiShield />, title: "Skilled Trades", desc: "Artisan Guilds under PMA" },
              { icon: <FiDollarSign />, title: "Wealth Protection", desc: "Trust-Based Services" }
            ].map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '15px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  borderTop: '3px solid #3b82f6'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6'
                  }}>
                    {model.icon}
                  </div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1e3a8a',
                    margin: 0
                  }}>{model.title}</h4>
                </div>
                <p style={{
                  fontSize: '13px',
                  color: '#6b7280',
                  margin: 0,
                  paddingLeft: '40px'
                }}>{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#1e40af',
          borderRadius: '12px',
          padding: '20px',
          color: 'white'
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FiArrowRight />
            Next Step
          </h3>
          <p style={{
            fontSize: '14px',
            lineHeight: 1.5,
            opacity: 0.9,
            margin: 0
          }}>
            Book your private session and complete the Operate Private Checklist. A counselor will evaluate your legal and asset profile and advise whether this is the next step in your roadmap journey.
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '12px 15px',
            borderRadius: '8px'
          }}>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>Course Price</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>$49</div>
            </div>
            <button style={{
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#1e40af',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              Contact Counselor
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapStepTwo;