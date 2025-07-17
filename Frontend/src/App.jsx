import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import PrivateMerchant from './courses/PrivateMerchant' // adjust path if different
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { Masterclass } from './page/Masterclass';
import Sov from './courses/sov';
import { WebsiteCreation } from './page/WebsiteCreation';


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/privatemerchant" element={<PrivateMerchant/>} />
        <Route path="/masterclass" element={<Masterclass />}/>
        <Route path="/sov" element={<Sov/>}/>
        <Route path="/website" element={<WebsiteCreation/>}/>

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
