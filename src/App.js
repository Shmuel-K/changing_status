// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Page from './pages/Page';
import CVTipsPage from './pages/CVTipsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="/cv-tips" element={<CVTipsPage />} />
        <Route path="/cv-tips/:id" element={<CVTipsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
