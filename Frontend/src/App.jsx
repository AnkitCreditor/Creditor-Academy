import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Static components
import Navbar from './components/navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader'; // 👈 Custom Loader

// Lazy loaded pages
const LandingPage = lazy(() => import('./page/LandingPage'));
const MasterClass = lazy(() => import('./page/MasterClass'));
const WebsiteCreation = lazy(() => import('./page/WebsiteCreation'));
const LiveClass = lazy(() => import('./page/LiveClass'));
const MerchantProcessing = lazy(() => import('./page/MerchantProcessing'));
const PrivacyPolicy = lazy(() => import('./page/PrivacyPolicy'));
const TermCondition = lazy(() => import('./page/TermCondition'));
const ReturnRefund = lazy(() => import('./page/ReturnRefund'));
const MembershipTnC = lazy(() => import('./page/MembershipTnC'));
const RemedyTC = lazy(() => import('./page/RemedyTC'));
const MasterTnc = lazy(() => import('./page/MasterTnc'));
const Athena = lazy(() => import('./page/Athena'));

// Courses
const Sov = lazy(() => import('./courses/sov'));
const Sophomore = lazy(() => import('./courses/Sophomore'));
const Operate = lazy(() => import('./courses/Operate'));
const Senior = lazy(() => import('./courses/Senior'));
const Remedy = lazy(() => import('./courses/Remedy'));
const PrivateMerchant = lazy(() => import('./courses/PrivateMerchant'));
const PrivateBusiness = lazy(() => import('./courses/PrivateBusiness'));
const DemoSOV = lazy(() => import('./courses/become_sov'));

// Components as pages
const ContactSection = lazy(() => import('./components/ContactSection'));
const RoadMapDemo = lazy(() => import('./components/roadmap_try'));

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privatemerchant" element={<PrivateMerchant />} />
          <Route path="/masterclass" element={<MasterClass />} />
          <Route path="/sov" element={<Sov />} />
          <Route path="/website" element={<WebsiteCreation />} />
          <Route path="/operate" element={<Operate />} />
          <Route path="/sophomore" element={<Sophomore />} />
          <Route path="/liveclass" element={<LiveClass />} />
          <Route path="/remedy" element={<Remedy />} />
          <Route path="/unlimitedcredit" element={<Senior />} />
          <Route path="/pmp" element={<MerchantProcessing />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termcondition" element={<TermCondition />} />
          <Route path="/returnrefund" element={<ReturnRefund />} />
          <Route path="/mtc" element={<MembershipTnC />} />
          <Route path="/ContactSection" element={<ContactSection />} />
          <Route path="/remedytnc" element={<RemedyTC />} />
          <Route path="/mastertnc" element={<MasterTnc />} />
          <Route path="/athena" element={<Athena />} />
          <Route path="/private" element={<PrivateBusiness />} />
          <Route path="/newsov" element={<DemoSOV />} />
          <Route path="/demoroad" element={<RoadMapDemo />} />
        </Routes>
      </Suspense>

      <Footer />
      {/* <Chatbot /> */}
    </Router>
  );
}

export default App;
