import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import GetApp from './components/GetApp';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import DeepLinkFallback from './components/DeepLinkFallback';
import Support from './components/Support';
import NotFound from './components/NotFound404';
import Preview from './components/preview';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect'); // Lesen des Redirect-Parameters

    if (redirectPath) {
      navigate(redirectPath, { replace: true }); // Navigation zur gewünschten Route
    }
  }, [navigate]);

  return null; // Dieses Component rendert nichts
}

function App() {
  return (
    <Router>
      <RedirectHandler /> {/* Fügt die Redirect-Logik hinzu */}
      <CookieBanner />
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <FAQ />
              <Preview />
              <GetApp />
            </>
          }
        />
        {/* Privacy and Terms */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Support Page */}
        <Route path="/support" element={<Support />} />
        {/* Deep Link Fallback */}
        <Route path="/share/:type/:id" element={<DeepLinkFallback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;