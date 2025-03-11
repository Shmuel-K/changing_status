// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page from './pages/Page';
import Header from './components/Header';
import Footer from './components/Footer';  // ייבוא רכיב Footer

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/page/1" replace />} />
        <Route path="/page/:id" element={<Page />} />
      </Routes>
      <Footer /> {/* רכיב Footer מופיע בכל עמוד */}
    </Router>
  );
}

export default App;
