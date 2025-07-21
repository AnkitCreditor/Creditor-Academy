import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import PrivateMerchant from './courses/PrivateMerchant';
import Remedy from './courses/Remedy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MasterClass } from './page/MasterClass';
import Sov from './courses/Sov';
import { WebsiteCreation } from './page/WebsiteCreation';
import OperatePrivate from './courses/OperatePrivate';
import Sophomore from './courses/Sophomore';
import LiveClass from './page/LiveClass';
import Senior from './courses/Senior';
import MerchantProcessing from './page/MerchantProcessing';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermCondition from './components/TermCondition';
import ReturnRefund from './page/ReturnRefund';
import MembershipTnC from './page/MembershipTnC';
import Chatbot from './components/chatbot'; // Import the Chatbot component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privatemerchant" element={<PrivateMerchant />} />
        <Route path="/masterclass" element={<MasterClass />} />
        <Route path="/sov" element={<Sov />} />
        <Route path="/website" element={<WebsiteCreation />} />
        <Route path="/operateprivate" element={<OperatePrivate />} />
        <Route path="/sophomore" element={<Sophomore />} />
        <Route path="/liveclass" element={<LiveClass />} />
        <Route path="/remedy" element={<Remedy />} />
        <Route path="/unlimitedcredit" element={<Senior />} />
        <Route path="/pmp" element={<MerchantProcessing />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termcondition" element={<TermCondition />} />
        <Route path="/returnrefund" element={<ReturnRefund />} />
        <Route path="/mtc" element={<MembershipTnC />} />
      </Routes>
      <Footer />
      <Chatbot /> {/* Add Chatbot here to render on all pages */}
    </Router>
  );
}

export default App;