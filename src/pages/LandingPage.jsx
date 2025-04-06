// src/pages/LandingPage.jsx
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext';
import landingPageEn from '../locales/en/landingPage';
import landingPageHe from '../locales/he/landingPage';

const LandingPage = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const text = language === 'en' ? landingPageEn : landingPageHe;

  useEffect(() => {
    // הסרנו את overflow: hidden מהגוף כדי לאפשר גלילה במובייל
    // אם חשוב לך לשמור על overflow: hidden במסכים גדולים, אפשר להוסיף בדיקה:
    // if (window.innerWidth > 600) { document.body.style.overflow = 'hidden'; }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleAlonClick = () => { navigate('/page/1'); };
  const handleMeyravClick = () => { navigate('/meet-meyrav'); };
  const handleNoaClick = () => { navigate('/noa-guide'); };
  const handleJobSearchClick = () => { navigate('/job-search'); };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative animated-gradient"
      style={{
        // מאפשרים גובה מלא וגלילה חופשית
        minHeight: '100vh',
        overflow: 'auto',
        position: 'relative',
      }}
    >
      {/* שכבת רקע שקופה */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* תוכן העמוד */}
      <div
        className="relative z-10 flex flex-col items-center justify-center"
        style={{
          minHeight: '100vh',
          padding: '2rem 1rem',
        }}
      >
        {/* בועה עם טקסט הסבר */}
        <div className="landing-bubble bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md">
          <p className="text-bg shadow-md text-lg leading-relaxed">
            {text.description}
          </p>
        </div>

        {/* כפתורים */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          <button
            onClick={handleAlonClick}
            className="alon-button"
            aria-label={text.alonButton}
          >
            {text.alonButton}
          </button>
          <button
            onClick={handleMeyravClick}
            className="alon-button"
            aria-label={text.meyravButton}
          >
            {text.meyravButton}
          </button>
          <button
            onClick={handleNoaClick}
            className="alon-button"
            aria-label={text.noaButton}
          >
            {text.noaButton}
          </button>
          {/* כפתור Job Search */}
          <button
            onClick={handleJobSearchClick}
            className="alon-button"
            aria-label="Job Search"
          >
            Job Search
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
