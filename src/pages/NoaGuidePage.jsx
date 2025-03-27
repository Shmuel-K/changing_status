import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import noaGuideData from './noaGuideData';
import arrowIcon from '../img/next-svgrepo-com.svg';
import { motion } from 'framer-motion';

const NoaGuidePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // If no id is provided, show the first page (index 0)
  const pageIndex = id ? parseInt(id, 10) - 1 : 0;
  const navigatingRef = useRef(false);
  const [showAction, setShowAction] = useState(false);

  const valid = pageIndex >= 0 && pageIndex < noaGuideData.length;

  const goNext = useCallback(() => {
    if (pageIndex < noaGuideData.length - 1) {
      navigate(`/noa-guide/${pageIndex + 2}`);
    }
  }, [pageIndex, navigate]);

  const goPrev = useCallback(() => {
    if (pageIndex > 0) {
      navigate(`/noa-guide/${pageIndex}`);
    }
  }, [pageIndex, navigate]);

  // Optimize scroll events using requestAnimationFrame
  useEffect(() => {
    if (!valid) return;
    let ticking = false;
    const handleWheel = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (e.deltaY > 50 && !navigatingRef.current && pageIndex < noaGuideData.length - 1) {
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
  }, [pageIndex, goNext, goPrev, valid]);

  // Reset action on page change (if needed)
  useEffect(() => {
    setShowAction(false);
  }, [pageIndex]);

  if (!valid) {
    return <div>Page Not Found</div>;
  }

  const { title, paragraphs, bullets, action, background } = noaGuideData[pageIndex];

  return (
    <motion.div
      className="relative w-full bg-cover bg-center animated-gradient"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        paddingTop: '60px',
        minHeight: 'calc(100vh - 60px)',
        background: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Content container */}
      <div className="container flex flex-col justify-center h-full text-left p-8" style={{ position: 'relative', zIndex: 10, color: '#000' }}>
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
        {/* אין כפתור "Continue" – רק ניווט */}

        {/* אזור הניווט והעמוד */}
        <div className="text-center mt-8">
          {/* כפתורי קודם / הבא */}
          <div className="space-x-4">
            {pageIndex > 0 && (
              <button onClick={goPrev} style={{ background: 'none', border: 'none', padding: 0 }} aria-label="Previous Page">
                <span className="text-bg">
                  <img
                    src={arrowIcon}
                    alt="Previous"
                    className="inline-block"
                    style={{ width: '24px', height: '24px', transform: 'rotate(180deg)' }}
                  />
                </span>
              </button>
            )}
            {pageIndex < noaGuideData.length - 1 && (
              <button onClick={goNext} style={{ background: 'none', border: 'none', padding: 0 }} aria-label="Next Page">
                <span className="text-bg">
                  <img
                    src={arrowIcon}
                    alt="Next"
                    className="inline-block"
                    style={{ width: '24px', height: '24px' }}
                  />
                </span>
              </button>
            )}
          </div>
          {/* מונה עמודים */}
          <div className="text-lg mt-4">
            <span className="text-bg">
              Page {pageIndex + 1} of {noaGuideData.length}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NoaGuidePage;
