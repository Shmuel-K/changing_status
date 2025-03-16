// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sharkImage from '../img/background/shark.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  // ביטול הגלילה בעמוד הבית
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // מסתיר את הגלילה
    return () => {
      // כשעוזבים את העמוד, מחזירים את המצב לקדמותו
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClick = () => {
    navigate('/page/1');
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
      {/* שכבת Overlay שקופה */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* תוכן העמוד (ממוקם מעל ה-Overlay) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full">
        <h1 className="text-white text-4xl font-bold mb-8 text-center px-4">
          Welcome to Your Next Step in High-Tech
        </h1>
        <button
          onClick={handleClick}
          className="alon-button"
          aria-label="Start Alon's Ten Steps"
        >
          Alon's Ten Steps
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
