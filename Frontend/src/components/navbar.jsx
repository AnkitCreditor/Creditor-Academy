import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/creditorlogo.png';
import AdminModal from './AdminModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // --- Start of Enhancements ---
  const coursesTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  const handleCoursesEnter = () => {
    clearTimeout(coursesTimeoutRef.current);
    setShowCourses(true);
  };

  const handleCoursesLeave = () => {
    coursesTimeoutRef.current = setTimeout(() => {
      setShowCourses(false);
    }, 200); // 200ms delay before closing
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setShowServices(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 200); // 200ms delay before closing
  };
  // --- End of Enhancements ---

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

   const loginButton = (isMobileView = false) => (
    <a
      href="#"
      onClick={openModal}
      style={{
        ...linkStyle,
        background: "#0D88C2",
        color: "#fff",
        padding: "10px 25px",
        borderRadius: "50px",
        fontWeight: "600",
        fontSize: isMobileView ? "0.9rem" : "1rem",
        whiteSpace: 'nowrap',
        transition: "background 0.3s ease"
      }}
      onMouseOver={e => e.target.style.background = "#0b7ab0"}
      onMouseOut={e => e.target.style.background = "#0D88C2"}
    >
      Login
    </a>
  );

  return (
    <>
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {isMobile && (
            <button onClick={toggleMenu} style={menuBtnStyle} aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          )}
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Creditor Academy" style={{ height: "40px", cursor: "pointer" }} />
          </Link>
        </div>

        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <div
              onMouseEnter={handleCoursesEnter}
              onMouseLeave={handleCoursesLeave}
              style={{ position: "relative" }}
            >
              <span style={{ ...linkStyle, cursor: "pointer" }}>
                Courses ▾
              </span>
              <div
                style={{
                  ...dropdownStyle,
                  opacity: showCourses ? 1 : 0,
                  transform: showCourses ? 'translateY(0)' : 'translateY(10px)',
                  visibility: showCourses ? 'visible' : 'hidden',
                }}
              >
                {[
                  { to: "/sov", label: "FRESHMAN: Sovereignty 101" },
                  { to: "/sophomore", label: "SOPHOMORE: Become Private" },
                  { to: "/operateprivate", label: "JUNIOR: Operate Private" },
                  { to: "/unlimitedcredit", label: "SENIOR: PRIVATE BUSINESS CREDIT" },
                  { to: "/remedy", label: "I WANT REMEDY NOW!" },
                  { to: "/privatemerchant", label: "Private Merchant & Processing" },
                ].map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    style={dropdownLinkStyle}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#e6f6ff";
                      e.target.style.fontWeight = "600";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.fontWeight = "normal";
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
              style={{ position: "relative" }}
            >
              <span style={{ ...linkStyle, cursor: "pointer" }}>
                Services ▾
              </span>
              <div
                style={{
                  ...dropdownStyle,
                  opacity: showServices ? 1 : 0,
                  transform: showServices ? 'translateY(0)' : 'translateY(10px)',
                  visibility: showServices ? 'visible' : 'hidden',
                }}
              >
                {[
                  { to: "/masterclass", label: "Membership" },
                  { to: "/website", label: "Website Creation" },
                  { to: "/pmp", label: "Merchant Processing" },
                ].map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    style={dropdownLinkStyle}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#e6f6ff";
                      e.target.style.fontWeight = "600";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.fontWeight = "normal";
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/contact" style={getLinkStyle}>Contact</NavLink>
            <NavLink to="/remedy" style={getLinkStyle}>I want Remedy NOW</NavLink>
            {loginButton()}
          </nav>
        )}

        {isMobile && loginButton(true)}

        {isMobile && isMenuOpen && (
          <div style={mobileMenuStyle}>
            <div style={mobileDropdownContainer}>
              <button
                onClick={() => setShowCourses(!showCourses)}
                style={mobileDropdownButton}
              >
                Courses {showCourses ? '▴' : '▾'}
              </button>
              {showCourses && (
                <div style={mobileDropdownContent}>
                  <NavLink to="/sov" style={mobileDropdownLinkStyle} onClick={toggleMenu}>FRESHMAN: Sovereignty 101</NavLink>
                  <NavLink to="/sophomore" style={mobileDropdownLinkStyle} onClick={toggleMenu}>SOPHOMORE: Become Private</NavLink>
                  <NavLink to="/operateprivate" style={mobileDropdownLinkStyle} onClick={toggleMenu}>JUNIOR: Operate Private</NavLink>
                  <NavLink to="/unlimitedcredit" style={mobileDropdownLinkStyle} onClick={toggleMenu}>SENIOR: PRIVATE BUSINESS CREDIT</NavLink>
                  <NavLink to="/remedy" style={mobileDropdownLinkStyle} onClick={toggleMenu}>I WANT REMEDY NOW!</NavLink>
                  <NavLink to="/privatemerchant" style={mobileDropdownLinkStyle} onClick={toggleMenu}>Private Merchant & Processing</NavLink>
                </div>
              )}
            </div>

            <div style={mobileDropdownContainer}>
              <button
                onClick={() => setShowServices(!showServices)}
                style={mobileDropdownButton}
              >
                Services {showServices ? '▴' : '▾'}
              </button>
              {showServices && (
                <div style={mobileDropdownContent}>
                  <NavLink to="/masterclass" style={mobileDropdownLinkStyle} onClick={toggleMenu}>Membership</NavLink>
                  <NavLink to="/website" style={mobileDropdownLinkStyle} onClick={toggleMenu}>Website Creation</NavLink>
                  <NavLink to="/pmp" style={mobileDropdownLinkStyle} onClick={toggleMenu}>Merchant Processing</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/contact" style={getMobileLinkStyle} onClick={toggleMenu}>Contact</NavLink>
            <NavLink to="/remedy" style={getMobileLinkStyle} onClick={toggleMenu}>I want Remedy NOW</NavLink>
          </div>
        )}
      </header>

      <AdminModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

// === STYLES ===

const headerStyle = {
  background: "linear-gradient(to right, #f2f4f7, #e5eaef)",
  padding: "20px 5%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "'Poppins', sans-serif",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  position: "sticky",
  top: 0,
  zIndex: 1001,
};

const linkStyle = {
  color: "#000",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1.05rem",
  transition: "all 0.3s ease",
  padding: "8px 12px",
  position: "relative",
};

const getLinkStyle = ({ isActive }) => ({
  ...linkStyle,
  color: isActive ? "#0D88C2" : "#000",
  fontWeight: isActive ? "700" : "500",
});

const dropdownStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: "#fff",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  padding: "10px 0",
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(10px)",
  transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
  minWidth: "260px",
  zIndex: 1000,
  border: "2px solid #0D88C2", // ✅ Blue border added
};

const dropdownLinkStyle = {
  display: "block",
  padding: "12px 20px",
  color: "#333",
  textDecoration: "none",
  transition: "all 0.2s ease",
  fontSize: "0.95rem",
  whiteSpace: "nowrap",
};

const menuBtnStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "0",
  display: "flex",
  alignItems: "center",
};

const mobileMenuStyle = {
  position: "absolute",
  top: "80px",
  left: 0,
  right: 0,
  background: "#fff",
  padding: "10px 0",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  zIndex: 999,
  animation: "slideDown 0.4s ease",
};

const mobileDropdownContainer = {
  width: "100%",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
};

const mobileDropdownButton = {
  ...linkStyle,
  width: "100%",
  background: "transparent",
  border: "none",
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 20px",
};

const mobileDropdownContent = {
  background: "#f9f9f9",
  padding: "0 10px",
};

const mobileDropdownLinkStyle = {
  display: "block",
  padding: "10px 30px",
  textDecoration: "none",
  color: "#555",
  fontSize: "0.95rem",
  borderBottom: "1px solid #eee",
};

const mobileLinkStyle = {
  ...linkStyle,
  padding: "12px 20px",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  display: "block",
};

const getMobileLinkStyle = ({ isActive }) => ({
  ...mobileLinkStyle,
  color: isActive ? "#0D88C2" : "#000",
  fontWeight: isActive ? "700" : "500",
});

export default Navbar;