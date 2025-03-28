// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider, LanguageContext } from './context/LanguageContext';
import LandingPage from './pages/LandingPage';
import Page from './pages/Page';
import CVTipsPage from './pages/CVTipsPage';
import MeetMeyrav from './pages/MeetMeyrav';
import NoaGuidePage from './pages/NoaGuidePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // מייבאים את הסגנונות

function AppContent() {
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  // אם השפה עברית – כיוון rtl, אחרת ltr
  const direction = language === 'he' ? 'rtl' : 'ltr';

  return (
    <div dir={direction}>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/page/:id" element={<Page />} />
          <Route path="/cv-tips" element={<CVTipsPage />} />
          <Route path="/cv-tips/:id" element={<CVTipsPage />} />
          <Route path="/meet-meyrav" element={<MeetMeyrav />} />
          <Route path="/noa-guide" element={<NoaGuidePage />} />
          <Route path="/noa-guide/:id" element={<NoaGuidePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
