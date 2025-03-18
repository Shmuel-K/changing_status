// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sharkImage from '../img/background/shark.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Disable scrolling on the landing page
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleAlonClick = () => {
    navigate('/page/1');
  };

  const handleCvtips = () => {
    navigate('/cv-tips');
  };

   const handleInterviewTips = () => {
    navigate('/interview-tips');
  };

  return (
    <div
      className="relative"
      style={{
        marginTop: '80px',
        minHeight: 'calc(100vh - 80px)',
        backgroundImage: `url(${sharkImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for improved text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Page content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full">
        <h1 className="text-white text-4xl font-bold mb-8 text-center px-4">
          Welcome to Your Next Step in High-Tech
        </h1>
        {/* Increased margin-bottom for extra spacing */}
        <button
          onClick={handleAlonClick}
          className="alon-button mb-8"
          aria-label="Start Alon's Ten Steps"
        >
          Alon's Ten Steps
        </button>
        <button
          onClick={handleCvtips}
          className="alon-button mb-4"
          aria-label="CV Tips"
        >
          Meyrav's CV Tips
        </button>
        {/*
        <button
          onClick={handleInterviewTips}
          className="alon-button"
          aria-label="Interview Tips"
        >
          Interview Tips
        </button>
        */}
      </div>
    </div>
  );
};

export default LandingPage;
