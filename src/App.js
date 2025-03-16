// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Page from './pages/Page';
import Header from './components/Header';
import Footer from './components/Footer';

function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* כעת ה-Footer מוצג בכל עמוד, כולל "/" */}
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
