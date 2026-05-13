import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { LocationsPage } from './pages/LocationsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PackagesPage } from './pages/PackagesPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import React, { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-deep-black selection:bg-royal-gold/30 selection:text-deep-black font-sans">
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-royal-gold z-[100] origin-left"
            style={{ scaleX }}
          />
          
          <Navbar />
          
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/packages" element={<PackagesPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                {/* Fallback to home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

