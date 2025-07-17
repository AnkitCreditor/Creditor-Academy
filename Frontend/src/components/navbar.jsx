import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/creditorlogo.png';
import AdminModal from './AdminModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header style={headerStyle}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <img src={logo} alt="Creditor Academy" style={{ height: "40px", cursor: "pointer" }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "40px", position: "relative" }}>
          {/* Dropdown - Courses */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
          >
            <span style={{ ...linkStyle, cursor: "pointer" }}>
              Courses ▾
            </span>
            {showCourses && (
              <div style={dropdownStyle}>
                <NavLink to="/sov" style={dropdownLinkStyle}>FRESHMAN: Sovereignty 101</NavLink>
                <NavLink to="/sophomore" style={dropdownLinkStyle}>SOPHOMORE: Become Private</NavLink>
                <NavLink to="/operateprivate" style={dropdownLinkStyle}>JUNIOR: Operate Private</NavLink>
                <NavLink to="/senioryear" style={dropdownLinkStyle}>SENIOR: PRIVATE BUSINESS CREDIT</NavLink>
                <NavLink to="/remedy" style={dropdownLinkStyle}>I WANT REMEDY NOW!</NavLink>
                <NavLink to="/privatemerchant" style={dropdownLinkStyle}>Private Merchant & Processing</NavLink>
              </div>
            )}
          </div>
          
          {/* Dropdown - Services */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span style={{ ...linkStyle, cursor: "pointer" }}>
              Services ▾
            </span>
            {showServices && (
              <div style={dropdownStyle}>
                <NavLink to="/masterclass" style={dropdownLinkStyle}>Membership</NavLink>
                <NavLink to="/website" style={dropdownLinkStyle}> Website Creation</NavLink>
                <NavLink to="/merchantprocessing" style={dropdownLinkStyle}>Merchant Processing</NavLink>
               
              </div>
            )}
          </div>
          
{/* 
          <NavLink to="/membership" style={getLinkStyle}>Membership</NavLink> */}
          <NavLink to="/contact" style={getLinkStyle}>Contact</NavLink>
          <NavLink to="/remedy" style={getLinkStyle}>I want Remedy NOW</NavLink>
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
              fontSize: "1rem",
              transition: "background 0.3s ease"
            }}
            onMouseOver={e => e.target.style.background = "#0b7ab0"}
            onMouseOut={e => e.target.style.background = "#0D88C2"}
          >
            Login
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} style={menuBtnStyle} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        {/* Mobile Nav */}
        <div style={{
          ...mobileMenuStyle,
          display: isMenuOpen ? "flex" : "none"
        }}>
         <NavLink to="/sov" style={dropdownLinkStyle}>FRESHMAN: Sovereignty 101</NavLink>
                <NavLink to="/sophomore" style={dropdownLinkStyle}>SOPHOMORE: Become Private</NavLink>
                <NavLink to="/operateprivate " style={dropdownLinkStyle}>JUNIOR: Operate Private</NavLink>
                <NavLink to="/senioryear" style={dropdownLinkStyle}>SENIOR: PRIVATE BUSINESS CREDIT</NavLink>
                <NavLink to="/remedy" style={dropdownLinkStyle}>I WANT REMEDY NOW!</NavLink>
                <NavLink to="/privatemerchant" style={dropdownLinkStyle}>Private Merchant & Processing</NavLink>
          <NavLink to="/membership" style={getMobileLinkStyle}>Membership</NavLink>
          <NavLink to="/contact" style={getMobileLinkStyle}>Contact</NavLink>
          <NavLink to="/remedy" style={getMobileLinkStyle}>I want Remedy NOW</NavLink>
          <a
            href="#"
            onClick={openModal}
            style={{
              ...mobileLinkStyle,
              background: "#0D88C2",
              color: "#fff",
              padding: "10px 25px",
              borderRadius: "50px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10px"
            }}
          >
            Login
          </a>
        </div>
      </header>

      {/* Modal */}
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
  position: "relative",
};

const linkStyle = {
  color: "#000",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1.05rem",
  transition: "color 0.2s ease",
};

const getLinkStyle = ({ isActive }) => ({
  ...linkStyle,
  color: isActive ? "#0D88C2" : "#000",
  fontWeight: isActive ? "700" : "500",
});

const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  background: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  zIndex: 1000,
  minWidth: '200px',
  borderRadius: '8px',
};

const dropdownLinkStyle = {
  display: 'block',
  padding: '10px 15px',
  textDecoration: 'none',
  color: '#333',
  whiteSpace: 'nowrap',
};

const mobileLinkStyle = {
  ...linkStyle,
  padding: "12px 0",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  width: "100%",
  display: "block",
  textAlign: "center",
};

const getMobileLinkStyle = ({ isActive }) => ({
  ...mobileLinkStyle,
  color: isActive ? "#0D88C2" : "#000",
  fontWeight: isActive ? "700" : "500",
});

const menuBtnStyle = {
  display: "none", // Show with media query for mobile
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "10px",
};

const mobileMenuStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  background: "linear-gradient(to right, #f2f4f7, #e5eaef)",
  padding: "20px 5%",
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
  flexDirection: "column",
  gap: "15px",
  zIndex: 1000,
};

export default Navbar;
