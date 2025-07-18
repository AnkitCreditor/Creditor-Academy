import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import PrivateMerchant from './courses/PrivateMerchant';
import Remedy from './courses/Remedy';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { Masterclass } from './page/Masterclass';
import Sov from './courses/sov';
import { WebsiteCreation } from './page/WebsiteCreation';
import OperatePrivate from './courses/OperatePrivate';
import Sophomore from './courses/Sophomore';
import LiveClass from './page/LiveClass';
import Senior from './courses/Senior';
import MerchantProcessing from './page/MerchantProcessing';
import Welcome from './page/Welcome';

function AppRoutes() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/welcome';
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privatemerchant" element={<PrivateMerchant />} />
        <Route path="/masterclass" element={<Masterclass />} />
        <Route path="/sov" element={<Sov />} />
        <Route path="/website" element={<WebsiteCreation />} />
        <Route path="/operateprivate" element={<OperatePrivate />} />
        <Route path="/sophomore" element={<Sophomore />} />
        <Route path="/liveclass" element={<LiveClass />} />
        <Route path="/remedy" element={<Remedy />} />
        <Route path="/unlimitedcredit" element={<Senior />} />
        <Route path="/pmp" element={<MerchantProcessing />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
