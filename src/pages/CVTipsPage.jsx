// src/pages/CVTipsPage.jsx
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cvTipsData from './cvTipsData';
import arrowIcon from '../img/next-svgrepo-com.svg';
// ודא שקובץ ה-SVG של הנורה אכן נקרא light-bulb-svgrepo-com.svg ונמצא בנתיב ../img
import lightBulbIcon from '../img/light-bulb-svgrepo-com.svg';

const CVTipsPage = () => {
  const { id } = useParams();
  // ברירת מחדל - אם לא מגיע id, נתחיל בעמוד הראשון
  const navigate = useNavigate();
  const pageIndex = id ? parseInt(id, 10) - 1 : 0;
  const navigatingRef = useRef(false);
  const [showAction, setShowAction] = useState(false);

  const valid = pageIndex >= 0 && pageIndex < cvTipsData.length;

  const goNext = useCallback(() => {
    if (pageIndex < cvTipsData.length - 1) {
      navigate(`/cv-tips/${pageIndex + 2}`);
    }
  }, [pageIndex, navigate]);

  const goPrev = useCallback(() => {
    if (pageIndex > 0) {
      navigate(`/cv-tips/${pageIndex}`);
    }
  }, [pageIndex, navigate]);

  // גלילת עכבר: מעבר בין עמודים
  useEffect(() => {
    if (!valid) return;
    const handleWheel = (e) => {
      if (e.deltaY > 50 && !navigatingRef.current && pageIndex < cvTipsData.length - 1) {
        navigatingRef.current = true;
        goNext();
        setTimeout(() => { navigatingRef.current = false; }, 1000);
      } else if (e.deltaY < -50 && !navigatingRef.current && pageIndex > 0) {
        navigatingRef.current = true;
        goPrev();
        setTimeout(() => { navigatingRef.current = false; }, 1000);
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [pageIndex, goNext, goPrev, valid]);

  // סגירת הבלון (showAction) במעבר עמוד
  useEffect(() => {
    setShowAction(false);
  }, [pageIndex]);

  if (!valid) {
    return <div>Page Not Found</div>;
  }

  const { title, paragraphs, bullets, action, background } = cvTipsData[pageIndex];

  return (
    <div
      className="relative w-full bg-cover bg-center animated-gradient"
      style={{
        minHeight: 'calc(100vh - 60px)',
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="main"
    >
      {/* שכבה שקופה מעל הרקע */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* תוכן הדף */}
      <div className="container flex flex-col justify-center h-full text-left p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-bg">{title}</span>
        </h1>

        {/* פסקאות */}
        {paragraphs.map((para, i) => (
          <p key={i} className="mb-4 leading-relaxed text-lg">
            <span className="text-bg" dangerouslySetInnerHTML={{ __html: para }} />
          </p>
        ))}

        {/* רשימת נקודות (אם יש) */}
        {bullets.length > 0 && (
          <ul className="list-disc list-inside mb-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="mb-1 text-lg">
                <span className="text-bg" dangerouslySetInnerHTML={{ __html: bullet }} />
              </li>
            ))}
          </ul>
        )}

        {/* כפתור נורה (action) אם קיים */}
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

        {/* ניווט קדימה/אחורה */}
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
            {pageIndex < cvTipsData.length - 1 && (
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

          {/* מספר עמוד */}
          <div className="text-center mt-4 text-lg">
            <span className="text-bg">
              Page {pageIndex + 1} of {cvTipsData.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVTipsPage;
