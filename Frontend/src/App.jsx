import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import PrivateMerchant from './courses/PrivateMerchant' // adjust path if different
import Navbar from './components/navbar';
import Footer from './components/Footer';
import OperatePrivate from './courses/OperatePrivate'; 
import Sophomore from './courses/Sophomore'; // adjust path if different
import LiveClass from './page/LiveClass'; // adjust path if different

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/privatemerchant" element={<PrivateMerchant/>} />
        <Route path="/operateprivate" element={<OperatePrivate />} />
        <Route path="/sophomore" element={<Sophomore />} />
        <Route path="/liveclass" element={<LiveClass />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
