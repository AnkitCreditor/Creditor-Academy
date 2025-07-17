import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import PrivateMerchant from './courses/PrivateMerchant' // adjust path if different
import Remedy from './courses/Remedy'
import Navbar from './components/navbar';
import Footer from './components/Footer';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/privatemerchant" element={<PrivateMerchant/>} />
        <Route path="/remedy" element={<Remedy/>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
