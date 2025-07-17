import React from 'react';
import '../assets/css/Header.css'; // External CSS for styling
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Left: Logo */}
        <div className="logo">
          <Link to="/">Creditor<span>Academy</span></Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="nav-links">
          <Link to="/courses">Courses</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/services">Services</Link>
        </nav>

        {/* Right: Login Button */}
        <div className="login-btn">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
