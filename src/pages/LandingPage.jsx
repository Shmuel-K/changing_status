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
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const [showNotice, setShowNotice] = useState(false);

  const handleAlonClick = () => { navigate('/page/1'); };
  const handleMeyravClick = () => { navigate('/meet-meyrav'); };
  const handleNoaClick = () => { navigate('/noa-guide'); };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative animated-gradient"
      style={{ paddingTop: '60px', minHeight: 'calc(100vh - 60px)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full">
        <div className="landing-bubble bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <p className="text-black text-2xl font-bold">{text.description}</p>
        </div>
        {/* קונטיינר הכפתורים עם סגנון inline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '2rem'
          }}
        >
          <button onClick={handleAlonClick} className="alon-button" aria-label={text.alonButton}>
            {text.alonButton}
          </button>
          <button onClick={handleMeyravClick} className="alon-button" aria-label={text.meyravButton}>
            {text.meyravButton}
          </button>
          <button onClick={handleNoaClick} className="alon-button" aria-label={text.noaButton}>
            {text.noaButton}
          </button>
        </div>
      </div>
      {/* עדכון: שימוש ב-position: fixed כדי להזיז את בלוק "Under Construction" למטה */}
      <div
        className="fixed flex flex-col items-start text-bg"
        style={{ bottom: '200px', left: '20px', zIndex: 9999 }}
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
