import React from 'react';
import freshmanImage from '../assets/freshman.jpg';
import sophomoreImage from '../assets/sophomore.jpg';
import juniorImage from '../assets/junior.jpg';
import seniorImage from '../assets/senior.jpeg';
import remedyImage from '../assets/remedy.jpg';
import privateImage from '../assets/private.jpg';
import './CoursesSection.css';

// Importing all icons from react-icons (Font Awesome)
import { 
  FaFileAlt,          // FileIcon
  FaComments,         // ChatIcon
  FaCheckCircle,      // VerifiedIcon
  FaCreditCard,       // CreditCardIcon
  FaUser,             // PersonIcon
  FaUsers,            // GroupIcon
  FaListUl,           // ListIcon
  FaFacebook,         // FacebookIcon
  FaFileSignature,    // DocumentIcon
  FaBriefcase,        // BriefcaseIcon
  FaHome,             // HomeIcon
  FaExclamationTriangle, // WarningIcon
  FaPaperPlane,       // SendIcon
  FaChartBar,         // BarChartIcon
  FaStore,            // StoreIcon
  FaCube,             // CubeIcon
  FaShieldAlt,        // ShieldIcon
  FaMobileAlt         // DeviceIcon
} from "react-icons/fa";

const CoursesSection = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">
        CREDITOR ACADEMY <span className="title-accent">COURSES</span>
      </h2>
      
      <div className="courses-grid">
        {/* Card 1: Sovereignty 101 */}
        <div className="course-card">
          <img src={freshmanImage} alt="Sovereignty 101" className="course-image" />
          <div className="course-content">
            <h3>FRESHMAN: Sovereignty 101</h3>
            <p>Discover how America shifted from liberty to control—and what it takes to reclaim independence once again.</p>
            <ul className="course-features">
              <li><FaFileAlt className="feature-icon" /> <span>Foundations of American sovereignty and law</span></li>
              <li><FaComments className="feature-icon" /> <span>Evolution of legal identity post-Civil War</span></li>
              <li><FaCheckCircle className="feature-icon" /> <span>Origins of commercial law and currency</span></li>
              <li><FaCreditCard className="feature-icon" /> <span>Public system as a managed debt trap</span></li>
              <li><FaUser className="feature-icon" /> <span>Understanding your lawful private standing</span></li>
            </ul>
            <a href="https://www.creditoracademy.com/page/show/152417?portal_id=14800" className="cta-button">
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Card 2: Become Private */}
        <div className="course-card">
          <img src={sophomoreImage} alt="Become Private" className="course-image" />
          <div className="course-content">
            <h3>SOPHOMORE: Become Private</h3>
            <p>Learn how to step out of the public and establish your affairs in the private.</p>
            <ul className="course-features">
              <li><FaCheckCircle className="feature-icon" /> <span>Correct your status and reclaim your lawful standing</span></li>
              <li><FaUsers className="feature-icon" /> <span>Establish yourself as an American National</span></li>
              <li><FaListUl className="feature-icon" /> <span>Complete your Secured Party Creditor process</span></li>
              <li><FaFacebook className="feature-icon" /> <span>Create your private identity and foundational documents</span></li>
              <li><FaFileSignature className="feature-icon" /> <span>Declare your political and legal autonomy</span></li>
            </ul>
            <a href="https://www.creditoracademy.com/page/show/152429?portal_id=14800" className="cta-button">
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Card 3: Operate Private */}
        <div className="course-card">
          <img src={juniorImage} alt="Operate Private" className="course-image" />
          <div className="course-content">
            <h3>JUNIOR: Operate Private</h3>
            <p>Build, manage, and grow an Empire in the private, independent of the public system.</p>
            <ul className="course-features">
              <li><FaBriefcase className="feature-icon" /> <span>Form Private Business Trusts</span></li>
              <li><FaHome className="feature-icon" /> <span>Private Membership Association</span></li>
              <li><FaUsers className="feature-icon" /> <span>Protect Real Estate Privately</span></li>
              <li><FaCheckCircle className="feature-icon" /> <span>Legacy Planning</span></li>
            </ul>
            <a href="https://www.creditoracademy.com/page/show/152427?portal_id=14800" className="cta-button">
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Card 4: Private Business Credit */}
        <div className="course-card">
          <img src={seniorImage} alt="Private Business Credit" className="course-image" />
          <div className="course-content">
            <h3>SENIOR: PRIVATE BUSINESS CREDIT</h3>
            <p>Learn how to build unlimited business credit in the Private</p>
            <ul className="course-features">
              <li><FaListUl className="feature-icon" /> <span>Build credit with unincorporated Business Trusts</span></li>
              <li><FaFileAlt className="feature-icon" /> <span>Access high-limit credit with no PG</span></li>
              <li><FaCreditCard className="feature-icon" /> <span>Set up strong reporting tradelines</span></li>
              <li><FaExclamationTriangle className="feature-icon" /> <span>Access airport lounges, luxury hotels, and vacations</span></li>
              <li><FaPaperPlane className="feature-icon" /> <span>200k+ Business Funding</span></li>
            </ul>
            <a href="https://www.creditoracademy.com/page/show/152428?portal_id=14800" className="cta-button">
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Card 5: I Want Remedy Now */}
        <div className="course-card">
          <img src={remedyImage} alt="I WANT REMEDY" className="course-image" />
          <div className="course-content">
            <h3>I WANT REMEDY NOW!</h3>
            <p>Fast, lawful credit discharge that puts you back in control.</p>
            <ul className="course-features">
              <li><FaChartBar className="feature-icon" /> <span>Credit Score & Report Fundamentals</span></li>
              <li><FaExclamationTriangle className="feature-icon" /> <span>Disputes & Legal Notices</span></li>
              <li><FaUser className="feature-icon" /> <span>Identity Theft & Restoration</span></li>
              <li><FaListUl className="feature-icon" /> <span>Credit Repair After Collections</span></li>
              <li><FaComments className="feature-icon" /> <span>Debt Discharge Tactics</span></li>
            </ul>
            <a href="https://www.creditoracademy.com/page/show/153492?portal_id=14800" className="cta-button">
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Card 6: Private Merchant & Processing */}
        <div className="course-card">
          <img src={privateImage} alt="Private Merchant" className="course-image" />
          <div className="course-content">
            <h3>PRIVATE MERCHANT & PROCESSING</h3>
            <p>Discover the foundation of private commerce and take control of how you get paid</p>
            <ul className="course-features">
              <li><FaCreditCard className="feature-icon" /> <span>Private Merchant Processing 101</span></li>
              <li><FaStore className="feature-icon" /> <span>Accept Payments Privately</span></li>
              <li><FaCube className="feature-icon" /> <span>Bypass Mainstream Merchant Gatekeepers</span></li>
              <li><FaShieldAlt className="feature-icon" /> <span>Avoid Freezes, Chargebacks & Account Terminations</span></li>
              <li><FaMobileAlt className="feature-icon" /> <span>POS Technology & Software</span></li>
            </ul>
            <a href="https://www.creditoracademy.com/page/show/153757?portal_id=14800" className="cta-button">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;