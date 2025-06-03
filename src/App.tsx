import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Preview from './components/Preview';
import Download from './components/Download';
import InviteHandler from './components/InviteHandler';

// Import the new page components
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SupportPage from './pages/SupportPage';
import NotFoundPage from './pages/NotFoundPage';

// Main landing page layout component
const HomePage: React.FC = () => (
  <>
    <section id="hero"><Hero /></section>
    <section id="features"><Features /></section>
    <section id="faq"><FAQ /></section>
    <section id="preview"><Preview /></section>
    <section id="download"><Download /></section>
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Header appears on all pages */}
      <main> {/* Wrap routes in a main tag for semantics */}
        <Routes>
          {/* Landing Page Sections */}
          <Route path="/" element={<HomePage />} />

          {/* Individual Page Routes */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/support" element={<SupportPage />} />

          {/* Dynamic Invite Route */}
          <Route path="/invite/:groupId/:token" element={<InviteHandler />} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer /> {/* Footer appears on all pages */}
      <Analytics /> {/* Vercel Analytics */}
    </Router>
  );
}

export default App;