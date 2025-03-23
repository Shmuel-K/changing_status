// src/pages/Page.jsx
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pagesData from './pagesData';
import arrowIcon from '../img/next-svgrepo-com.svg';
import lightBulbIcon from '../img/light-bulb-svgrepo-com.svg';
import { motion } from 'framer-motion';

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageIndex = parseInt(id, 10) - 1;
  const navigatingRef = useRef(false);
  const [showAction, setShowAction] = useState(false);

  const valid = pageIndex >= 0 && pageIndex < pagesData.length;

  const goNext = useCallback(() => {
    if (pageIndex < pagesData.length - 1) {
      navigate(`/page/${pageIndex + 2}`);
    }
  }, [pageIndex, navigate]);

  const goPrev = useCallback(() => {
    if (pageIndex > 0) {
      navigate(`/page/${pageIndex}`);
    }
  }, [pageIndex, navigate]);

  // Use requestAnimationFrame to optimize scroll events
  useEffect(() => {
    if (!valid) return;
    let ticking = false;
    const handleWheel = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (e.deltaY > 50 && !navigatingRef.current && pageIndex < pagesData.length - 1) {
            navigatingRef.current = true;
            goNext();
            setTimeout(() => {
              navigatingRef.current = false;
            }, 1000);
          } else if (e.deltaY < -50 && !navigatingRef.current && pageIndex > 0) {
            navigatingRef.current = true;
            goPrev();
            setTimeout(() => {
              navigatingRef.current = false;
            }, 1000);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [pageIndex, goNext, goPrev, valid]);

  // Close action balloon on page change
  useEffect(() => {
    setShowAction(false);
  }, [pageIndex]);

  if (!valid) {
    return <div>Page Not Found</div>;
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
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Page content */}
      <div className="container flex flex-col justify-center h-full text-left p-8">
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

        {action && (
          <div className="mt-6 ml-8">
            <button
              onClick={() => setShowAction(!showAction)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img
                src={lightBulbIcon}
                alt="Action to Take"
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

        {/* Navigation buttons */}
        <div style={{ padding: '0 2em' }}>
          <div className="mt-8 flex justify-between w-full">
            {pageIndex > 0 && (
              <button
                onClick={goPrev}
                style={{ background: 'none', border: 'none', padding: 0 }}
                aria-label="Previous Page"
              >
                <span className="text-bg">
                  <img
                    src={arrowIcon}
                    alt="Previous"
                    className="arrow-icon"
                    style={{ width: '24px', height: '24px', transform: 'rotate(180deg)' }}
                  />
                </span>
              </button>
            )}
            {pageIndex < pagesData.length - 1 && (
              <button
                onClick={goNext}
                style={{ background: 'none', border: 'none', padding: 0 }}
                aria-label="Next Page"
              >
                <span className="text-bg">
                  <img
                    src={arrowIcon}
                    alt="Next"
                    className="arrow-icon"
                    style={{ width: '24px', height: '24px' }}
                  />
                </span>
              </button>
            )}
          </div>

          {/* Page number */}
          <div className="text-center mt-4 text-lg">
            <span className="text-bg">
              Page {pageIndex + 1} of {pagesData.length}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
