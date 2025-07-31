import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/creditorlogo.png';
import mascot from '../assets/paul_avatar.png';
import AdminModal from './AdminModal';
import './navbar.css';

const desktopTourSteps = [
  {
    selector: null,
    text: "👋 Welcome to Creditor Academy!",
    description: "We empower individuals with private education on credit, remedy processes, and business structuring. Let's take a quick tour of the platform."
  },
  { selector: '#nav-courses', text: 'Explore all credit-building courses.', description: 'Browse our structured education paths covering credit, sovereignty, and private business solutions.' },
  { selector: '#nav-services', text: 'Check services like website and merchant support.', description: 'We offer additional services like private website setups and merchant processing tailored to your journey.' },
  { selector: '#nav-membership', text: 'Join our membership to unlock full benefits.', description: 'Access exclusive content, member-only classes, priority support, and more with our all-in-one membership.' },
  { selector: '#nav-contact', text: 'Have a question? Contact us here.', description: 'Need help or have a query? Reach out to us anytime through our contact page.' },
  { selector: '#nav-remedy', text: 'Start your remedy journey now.', description: 'Take action with practical remedy courses to correct status, claim rights, and restore credit powerfully.' },
  { selector: '#nav-login', text: 'Already a member? Login here.', description: "If you've joined us before, log in to access your dashboard, courses, and exclusive resources." }
];

const mobileTourSteps = [
  {
    selector: '.nav-menu-btn',
    text: "🍔 Hamburger Menu",
    description: "This is the hamburger icon. Tap here to access all important links and navigation options."
  },
  {
    selector: '#nav-login.mobile',
    text: "🔑 Login Button",
    description: "Tap here to create an account or login to access member features."
  },
  {
    selector: null,
    text: "🤖 AI Assistant",
    description: "This is your AI assistant chatbot ready to help with any questions."
  }
];

function getTourSteps(isMobile) {
  return isMobile ? mobileTourSteps : desktopTourSteps;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [scrolled, setScrolled] = useState(false);

  const [tourStep, setTourStep] = useState(0);
  const [tourActive, setTourActive] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);

  const coursesTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const [tourSteps, setTourSteps] = useState(getTourSteps(window.innerWidth < 1024));

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setTourSteps(getTourSteps(mobile));
      if (!mobile && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCourses(false);
        setShowServices(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (tourActive) setTimeout(() => setAnimateIn(true), 100);
    else setAnimateIn(false);
  }, [tourActive]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobile && isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen, isMobile]);

  const handleCoursesEnter = () => {
    clearTimeout(coursesTimeoutRef.current);
    setShowCourses(true);
  };
  const handleCoursesLeave = () => {
    coursesTimeoutRef.current = setTimeout(() => setShowCourses(false), 150);
  };
  const handleServicesEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setShowServices(true);
  };
  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setShowServices(false), 150);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleMobileLinkClick = () => {
    setShowCourses(false);
    setShowServices(false);
    toggleMenu();
  };

  // Corrected id+class for focus circle to work on mobile
  const loginButton = (isMobileView = false) => (
    <a
      id="nav-login"
      href="#"
      onClick={openModal}
      className={`nav-login-btn${isMobileView ? ' mobile' : ''}`}
      style={isMobileView ? { flexShrink: 0, marginLeft: 'auto' } : {}}
    >
      Login
    </a>
  );

  const getCurrentRect = () => {
    const step = tourSteps[tourStep];
    if (!step || !step.selector) return null;
    const el = document.querySelector(step.selector);
    return el?.getBoundingClientRect();
  };

  // Boxy, professional mascot box for mobile
  const mascotBoxStyle = isMobile
    ? {
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: `translate(-50%, ${animateIn ? '0' : '28px'})`,
        width: '95vw',
        maxWidth: '340px',
        minWidth: 0,
        height: 'auto',
        padding: '14px 18px 14px 56px',
        borderRadius: '16px',
        border: '1.5px solid #e9e9f5',
        background: 'rgba(21, 26, 40, 0.97)',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.23)',
        zIndex: 10000,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        backdropFilter: 'blur(11px)',
        overflow: 'hidden',
        opacity: animateIn ? 1 : 0,
        transition: 'all 0.5s cubic-bezier(.4,1.7,0.5,0.8)',
      }
    : {
        position: 'fixed',
        bottom: '24px',
        left: '32px',
        width: '310px',
        minHeight: '162px',
        height: 'auto',
        padding: '19px 22px 19px 92px',
        borderRadius: '17px',
        fontSize: '1.1rem',
        boxShadow: '0 8px 22px rgba(0,0,0,0.25)',
        zIndex: 10000,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(21, 26, 40, 0.99)',
        backdropFilter: 'blur(8px)',
        opacity: animateIn ? 1 : 0,
        transition: 'all 0.6s ease',
        transform: animateIn ? 'translateY(0)' : 'translateY(36px)',
      };

  const mascotImageStyle = isMobile
    ? {
        width: '43px',
        minWidth: '43px',
        height: '56px',
        position: 'absolute',
        left: '10px',
        bottom: '15px',
        objectFit: 'contain'
      }
    : {
        width: 'auto',
        height: '134px',
        position: 'absolute',
        left: '2px',
        bottom: '20px'
      };

  return (
    <>
      <header className={`nav-root${scrolled ? " scrolled" : ""}`} ref={dropdownRef}>
        <div className="nav-logo-wrap">
          {isMobile && (
            <button onClick={toggleMenu} className="nav-menu-btn" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#59b7ff">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeWidth="2.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          )}
          <Link to="/" className="nav-logo-link">
            <img src={logo} alt="Creditor Academy" className="nav-logo" />
          </Link>
        </div>
        {!isMobile && (
          <nav className="nav-main-menu">
            <div className="nav-dropdown-wrap" onMouseEnter={handleCoursesEnter} onMouseLeave={handleCoursesLeave}>
              <span id="nav-courses" className="nav-link cool-underline">Courses ▾</span>
              <div className={`nav-dropdown${showCourses ? ' visible' : ''}`}>
                <NavLink to="/newsov" className="nav-dropdown-link cool-underline" onClick={() => setShowCourses(false)}>BecomePrivate & New SOV 101</NavLink>
                <NavLink to="/operate" className="nav-dropdown-link cool-underline" onClick={() => setShowCourses(false)}>Operate Private</NavLink>
                <NavLink to="/private" className="nav-dropdown-link cool-underline" onClick={() => setShowCourses(false)}>PRIVATE BUSINESS CREDIT</NavLink>
              </div>
            </div>
            <div className="nav-dropdown-wrap" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
              <span id="nav-services" className="nav-link cool-underline">Services ▾</span>
              <div className={`nav-dropdown${showServices ? ' visible' : ''}`}>
                <NavLink to="/liveclass" className="nav-dropdown-link cool-underline" onClick={() => setShowServices(false)}>Live Class</NavLink>
                <NavLink to="/athena" className="nav-dropdown-link cool-underline" onClick={() => setShowServices(false)}>Athena LMS</NavLink>
                <NavLink to="/website" className="nav-dropdown-link cool-underline" onClick={() => setShowServices(false)}>Website Creation</NavLink>
                <NavLink to="/pmp" className="nav-dropdown-link cool-underline" onClick={() => setShowServices(false)}>Merchant Processing</NavLink>
              </div>
            </div>
            <NavLink id="nav-membership" to="/masterclass" className="nav-link cool-underline">Membership</NavLink>
            <NavLink id="nav-contact" to="/ContactSection" className="nav-link cool-underline">Contact</NavLink>
            <NavLink id="nav-remedy" to="/remedy" className="nav-link cool-underline">Remedy NOW</NavLink>
            {loginButton()}
          </nav>
        )}
        {isMobile && loginButton(true)}
        {isMobile && isMenuOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-dropdown">
              <button onClick={() => setShowCourses(!showCourses)} className="nav-mobile-dropdown-btn">
                Courses {showCourses ? '▴' : '▾'}
              </button>
              {showCourses && (
                <div className="nav-mobile-dropdown-content">
                  <NavLink to="/newsov" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>BecomePrivate & New SOV 101</NavLink>
                  <NavLink to="/operate" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Operate Private</NavLink>
                  <NavLink to="/private" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>PRIVATE BUSINESS CREDIT</NavLink>
                </div>
              )}
            </div>
            <div className="nav-mobile-dropdown">
              <button onClick={() => setShowServices(!showServices)} className="nav-mobile-dropdown-btn">
                Services {showServices ? '▴' : '▾'}
              </button>
              {showServices && (
                <div className="nav-mobile-dropdown-content">
                  <NavLink to="/liveclass" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Live Class</NavLink>
                  <NavLink to="/athena" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Athena LMS</NavLink>
                  <NavLink to="/website" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Website Creation</NavLink>
                  <NavLink to="/pmp" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Merchant Processing</NavLink>
                </div>
              )}
            </div>
            <NavLink to="/masterclass" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Membership</NavLink>
            <NavLink to="/ContactSection" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>Contact</NavLink>
            <NavLink to="/remedy" className="nav-mobile-link cool-underline" onClick={handleMobileLinkClick}>I Want Remedy NOW !</NavLink>
          </div>
        )}
      </header>

      {tourActive && tourSteps[tourStep] && (
        <>
          {/* Overlay */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.72)',
            zIndex: 998
          }} />
          {/* Focus highlight */}
          {(() => {
            const rect = getCurrentRect();
            if (!rect) return null;
            const size = Math.max(rect.width, rect.height) + (isMobile ? 27 : 32);
            const top = rect.top + window.scrollY + rect.height / 2 - size / 2;
            const left = rect.left + window.scrollX + rect.width / 2 - size / 2;
            return (
              <div style={{
                position: 'absolute',
                top,
                left,
                width: size,
                height: size,
                borderRadius: '50%',
                boxShadow: '0 0 0 3px #fff, 0 0 16px 7px #3498db',
                zIndex: 9999,
                pointerEvents: 'none',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)'
              }} />
            );
          })()}
          {/* Mascot Box with Avatar & Animation */}
          <div style={mascotBoxStyle}>
            {/* Speech bubble tail */}
            <div style={{
              position: 'absolute',
              left: isMobile ? '26px' : '47px',
              bottom: isMobile ? '-11px' : '-14px',
              width: 0,
              height: 0,
              borderLeft: isMobile ? '6px solid transparent' : '10px solid transparent',
              borderRight: isMobile ? '6px solid transparent' : '10px solid transparent',
              borderTop: isMobile
                ? '13px solid rgba(21,26,40,0.94)'
                : '15px solid rgba(21,26,40,0.98)',
              filter: 'blur(0.4px)',
              zIndex: -1
            }} />
            {/* Mascot Image */}
            <img src={mascot} alt="Mascot" style={mascotImageStyle} />
            {/* Text + Buttons */}
            <div style={{
              flex: 1,
              fontFamily: "'Poppins', sans-serif",
              position: 'relative',
              marginLeft: isMobile ? '0' : '10px',
              marginRight: 0,
              minWidth: 0,
              paddingLeft: isMobile ? '7px' : 0
            }}>
              <p style={{
                fontSize: isMobile ? '1.08rem' : '1.2rem',
                fontWeight: 700,
                margin: 0
              }}>{tourSteps[tourStep].text}</p>
              {tourSteps[tourStep].description && (
                <p style={{
                  fontSize: isMobile ? '0.92rem' : '0.97rem',
                  marginTop: '6px',
                  color: '#e0e1ea',
                  lineHeight: 1.44,
                  fontWeight: 400,
                }}>
                  {tourSteps[tourStep].description}
                </p>
              )}

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: isMobile ? '2px' : '13px'
              }}>
                <button
                  onClick={() => setTourActive(false)}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#bbc',
                    fontSize: isMobile ? '0.82rem' : '0.87rem',
                    fontFamily: 'Poppins, sans-serif',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0
                  }}
                >Skip</button>
                <div style={{ display: 'flex', gap: '11px' }}>
                  {tourStep > 0 && (
                    <button
                      onClick={() => setTourStep(tourStep - 1)}
                      style={{
                        backgroundColor: '#fff',
                        color: '#262a3a',
                        border: '1px solid #9aa2c1',
                        padding: isMobile ? '5.5px 11px' : '8px 16px',
                        borderRadius: '7px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: isMobile ? '0.81rem' : '0.89rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 2px 9px 0 rgba(0,0,0,0.12)',
                        transition: 'all 0.2s ease'
                      }}
                    >← Back</button>
                  )}
                  <button
                    onClick={() => {
                      if (tourStep < tourSteps.length - 1) setTourStep(tourStep + 1);
                      else setTourActive(false);
                    }}
                    style={{
                      backgroundColor: '#3498db',
                      color: '#fff',
                      border: 'none',
                      padding: isMobile ? '5.5px 11px' : '8px 16px',
                      borderRadius: '7px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: isMobile ? '0.81rem' : '0.89rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 2px 9px 0 rgba(52,152,219,0.15)',
                      transition: 'all 0.2s ease'
                    }}
                  >{tourStep === tourSteps.length - 1 ? 'Finish' : 'Next →'}</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <AdminModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
