// src/pages/Page.jsx
import React, { useEffect, useRef, useCallback, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import arrowIcon from '../img/next-svgrepo-com.svg';
import lightBulbIcon from '../img/light-bulb-svgrepo-com.svg'; // עדכון: יבוא אייקון נורה
import { motion } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext';
import pagesDataEn from '../locales/en/pagesData';
import pagesDataHe from '../locales/he/pagesData';

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const pagesData = language === 'en' ? pagesDataEn : pagesDataHe;
  const pageIndex = parseInt(id, 10) - 1;
  const navigatingRef = useRef(false);
  const [showAction, setShowAction] = useState(false);

  const valid = pageIndex >= 0 && pageIndex < pagesData.length;

  const goNext = useCallback(() => {
    if (pageIndex < pagesData.length - 1) {
      navigate(`/page/${pageIndex + 2}`);
    }
  }, [pageIndex, navigate, pagesData.length]);

  const goPrev = useCallback(() => {
    if (pageIndex > 0) {
      navigate(`/page/${pageIndex}`);
    }
  }, [pageIndex, navigate]);

  useEffect(() => {
    if (!valid) return;
    let ticking = false;
    const handleWheel = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (e.deltaY > 50 && !navigatingRef.current && pageIndex < pagesData.length - 1) {
            navigatingRef.current = true;
            goNext();
            setTimeout(() => { navigatingRef.current = false; }, 1000);
          } else if (e.deltaY < -50 && !navigatingRef.current && pageIndex > 0) {
            navigatingRef.current = true;
            goPrev();
            setTimeout(() => { navigatingRef.current = false; }, 1000);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [pageIndex, goNext, goPrev, valid, pagesData.length]);

  useEffect(() => {
    setShowAction(false);
  }, [pageIndex]);

  if (!valid) {
    return <div>{language === 'en' ? "Page Not Found" : "דף לא נמצא"}</div>;
  }

  const { title, paragraphs, bullets, action, background } = pagesData[pageIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-cover bg-center animated-gradient"
      style={{
        paddingTop: '60px',
        minHeight: 'calc(100vh - 60px)',
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="main"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="container flex flex-col justify-center h-full text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-bg">{title}</span>
        </h1>
        {paragraphs.map((para, i) => (
          <p key={i} className="mb-4 leading-relaxed text-lg">
            <span className="text-bg" dangerouslySetInnerHTML={{ __html: para }} />
          </p>
        ))}
        {bullets.length > 0 && (
          <ul className="list-disc list-inside mb-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="mb-1 text-lg">
                <span className="text-bg" dangerouslySetInnerHTML={{ __html: bullet }} />
              </li>
            ))}
          </ul>
        )}
        {/* אייקון הנורה עבור "Action to take" */}
        {action && (
          <div className="mt-6 ml-8">
            <button
              onClick={() => setShowAction(!showAction)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img
                src={lightBulbIcon}
                alt={language === 'en' ? "Action to Take" : "פעולה"}
                style={{ width: '100px', height: '100px', transform: 'translateX(10px)' }}
              />
            </button>
            {showAction && (
              <p className="mt-4 text-lg font-semibold text-gray-100 bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-lg">
                <span className="text-bg" dangerouslySetInnerHTML={{ __html: action }} />
              </p>
            )}
          </div>
        )}
        <div className="flex flex-col items-center justify-center mt-8 space-y-4">
          <div className="flex items-center space-x-4">
            {pageIndex > 0 && (
              <button
                onClick={goPrev}
                style={{ background: 'none', border: 'none', padding: 0 }}
                aria-label={language === 'en' ? "Previous Page" : "דף קודם"}
              >
                <span className="text-bg">
                  <img
                    src={arrowIcon}
                    alt={language === 'en' ? "Previous" : "דף קודם"}
                    style={{ width: '24px', height: '24px', transform: 'rotate(180deg)' }}
                  />
                </span>
              </button>
            )}
            {pageIndex < pagesData.length - 1 && (
              <button
                onClick={goNext}
                style={{ background: 'none', border: 'none', padding: 0 }}
                aria-label={language === 'en' ? "Next Page" : "דף הבא"}
              >
                <span className="text-bg">
                  <img
                    src={arrowIcon}
                    alt={language === 'en' ? "Next" : "דף הבא"}
                    style={{ width: '24px', height: '24px' }}
                  />
                </span>
              </button>
            )}
          </div>
          <div className="text-lg">
            <span className="text-bg">
              {language === 'en'
                ? `Page ${pageIndex + 1} of ${pagesData.length}`
                : `עמוד ${pageIndex + 1} מתוך ${pagesData.length}`}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
