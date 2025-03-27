// src/pages/LandingPage.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import warningIcon from '../img/warning.svg';
import { LanguageContext } from '../context/LanguageContext';
import landingPageEn from '../locales/en/landingPage';
import landingPageHe from '../locales/he/landingPage';

const LandingPage = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const text = language === 'en' ? landingPageEn : landingPageHe;

  useEffect(() => {
    // מונע גלילה בעמוד הנחיתה
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [showNotice, setShowNotice] = useState(false);

  const handleAlonClick = () => {
    navigate('/page/1');
  };

  const handleMeyravClick = () => {
    navigate('/meet-meyrav');
  };

  const handleNoaClick = () => {
    navigate('/noa-guide');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative animated-gradient"
      style={{ paddingTop: '60px', minHeight: 'calc(100vh - 60px)' }}
    >
      {/* שכבת אוברליי לשיפור הניגודיות */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* תוכן העמוד */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full">
        {/* בועה ממורכזת – הסרנו מחלקות כמו inline-block ו-max-w-3xl */}
        <div className="landing-bubble bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <p className="text-black text-2xl font-bold">
            {text.description}
          </p>
        </div>

        {/* כפתורים */}
        <div className="mt-8 flex flex-col items-center">
          <button
            onClick={handleAlonClick}
            className="alon-button mb-4"
            aria-label={text.alonButton}
          >
            {text.alonButton}
          </button>
          <button
            onClick={handleMeyravClick}
            className="alon-button mb-4"
            aria-label={text.meyravButton}
          >
            {text.meyravButton}
          </button>
          <button
            onClick={handleNoaClick}
            className="alon-button mb-4"
            aria-label={text.noaButton}
          >
            {text.noaButton}
          </button>
        </div>
      </div>

      {/* אייקון לחיץ + טקסט "Under Construction" */}
      <div
        className="absolute flex flex-col items-start text-bg"
        style={{
          bottom: '20px',
          left: '20px',
        }}
      >
        <img
          src={warningIcon}
          alt={text.underConstruction}
          style={{ width: '40px', height: '40px', cursor: 'pointer' }}
          onClick={() => setShowNotice(!showNotice)}
        />

        <AnimatePresence>
          {showNotice && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-2 bg-white text-black p-4 rounded shadow-md"
              style={{ maxWidth: '220px' }}
            >
              <p className="text-base">{text.underConstruction}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LandingPage;
