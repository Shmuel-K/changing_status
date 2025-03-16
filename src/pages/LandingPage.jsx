// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sharkImage from '../img/background/shark.jpg'; // נתיב לתמונה

const LandingPage = () => {
  const navigate = useNavigate();

  // ביטול גלילה בעמוד הבית
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
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
        marginTop: '80px', // אם ה-Header מקובע, הכנס רווח מתאים
        minHeight: 'calc(100vh - 80px)', // תופס את כל המסך למטה מה-Header
        backgroundImage: `url(${sharkImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* שכבת אוברליי שקופה לשיפור ניגודיות הטקסט */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* תוכן העמוד (ממוקם מעל האוברליי) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full px-4">
        <h1
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
        >
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
