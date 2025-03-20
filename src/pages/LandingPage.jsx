// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sharkImage from '../img/background/shark.jpg';
import warningIcon from '../img/warning.svg'; // ייבוא האייקון

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
      </div>

      {/* Bottom left notice with background (using .text-bg) */}
      <div
        className="text-bg flex items-center"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
        }}
      >
        <img
          src={warningIcon}
          alt="Under Construction"
          style={{
            width: '40px',
            height: '40px',
            marginRight: '20px',
            transform: 'translateX(10px)', // מזיז את האייקון קצת ימינה
          }}
        />
        <p className="text-base">
          Website Under Construction
          <br />
          I'd appreciate your feedback on our LinkedIn page.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
