// src/pages/Page.jsx
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pagesData from './pagesData';
import arrowIcon from '../img/next-svgrepo-com.svg'; // ייבוא האייקון לחצים

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

  useEffect(() => {
    if (!valid) return;
    const handleWheel = (e) => {
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
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [pageIndex, goNext, goPrev, valid]);

  if (!valid) {
    return <div>Page Not Found</div>;
  }

  const { title, paragraphs, bullets, action, background } = pagesData[pageIndex];

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center animated-gradient p-12"
      style={{ background: background }}
      role="main"
    >
      <div className="container mt-16 text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {paragraphs.map((para, i) => (
          <p key={i} className="mb-4 leading-relaxed text-lg">
            {para}
          </p>
        ))}
        {bullets.length > 0 && (
          <ul className="list-disc list-inside mb-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="mb-1 text-lg">
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* עטיפת כל הקטע התחתון עם הזחה של 2em */}
        <div style={{ paddingLeft: '2em' }}>
          {action && (
            <div className="mt-6">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setShowAction(!showAction)}
              >
                Action to Take
              </button>
              {showAction && (
                <p className="mt-4 text-lg font-semibold text-gray-100 bg-gray-800 p-4 rounded-lg shadow-lg">
                  {action}
                </p>
              )}
            </div>
          )}

          <div className="mt-8 flex justify-between w-full">
            {pageIndex > 0 && (
              <button
                onClick={goPrev}
                style={{ background: 'none', border: 'none', padding: 0 }}
                aria-label="Previous Page"
              >
                <img
                  src={arrowIcon}
                  alt="Previous"
                  className="arrow-icon"
                  style={{ width: '24px', height: '24px', transform: 'rotate(180deg)' }}
                />
              </button>
            )}
            {pageIndex < pagesData.length - 1 && (
              <button
                onClick={goNext}
                style={{ background: 'none', border: 'none', padding: 0 }}
                aria-label="Next Page"
              >
                <img
                  src={arrowIcon}
                  alt="Next"
                  className="arrow-icon"
                  style={{ width: '24px', height: '24px' }}
                />
              </button>
            )}
          </div>

          <div className="text-center mt-4 text-lg">
            Page {pageIndex + 1} of {pagesData.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
