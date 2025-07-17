import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import LandingPage from './page/Home';
import LiveClass from './page/LiveClass';
import Masterclass from './page/MasterClass';
import MerchantProcessing from './page/MerchantProcessing';
import WebsiteCreation from './page/WebsiteCreation';

import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/live" element={<LiveClass />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/merchant-processing" element={<MerchantProcessing />} />
          <Route path="/website-creation" element={<WebsiteCreation />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
