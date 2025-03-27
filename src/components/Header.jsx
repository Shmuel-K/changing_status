// src/components/Header.jsx
import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import darkThemeIcon from '../img/dark-theme-svgrepo-com.svg';

// אייקונים של הדגלים
import usFlagIcon from '../img/united-states-svgrepo-com.svg';
import israelFlagIcon from '../img/israel-svgrepo-com.svg';

import { LanguageContext } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isCVTipsPage = location.pathname.startsWith("/cv-tips");
  const activePage = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // שימוש בהקשר השפה
  const { language, toggleLanguage } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // החלפת מצב כהה/בהיר
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // הגדרת פריטי התפריט רק אם זה לא דף הנחיתה ולא דף ה-CV Tips
  const menuItems = [
    { pageNum: 1, text: 'Opening' },
    ...Array.from({ length: 10 }, (_, i) => ({
      pageNum: i + 2,
      text: `Step ${i + 1}`,
    })),
    { pageNum: 12, text: 'Conclusion' },
  ];

  return (
    <header className="site-header">
      <div className="logo">
        <h2>Changing Your Status</h2>
      </div>

      <nav>
        {!isLandingPage && (
          <>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={isOpen ? 'open' : ''}>
              {isCVTipsPage ? (
                <li>
                  <Link
                    to="/"
                    className={activePage === "/" ? "active" : ""}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
              ) : (
                <>
                  {menuItems.map(({ pageNum, text }) => (
                    <li key={pageNum}>
                      <Link
                        to={`/page/${pageNum}`}
                        className={activePage === `/page/${pageNum}` ? 'active' : ''}
                        onClick={() => setIsOpen(false)}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/"
                      className={activePage === "/" ? "active" : ""}
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </>
        )}

        {/* כפתור החלפת מצב כהה/בהיר */}
        <button
          className={`dark-mode-toggle ${isLandingPage ? 'landing-toggle' : ''}`}
          onClick={toggleDarkMode}
          style={{ background: 'none', border: 'none', padding: 0, marginLeft: '10px' }}
        >
          <img
            src={darkThemeIcon}
            alt="Toggle dark/light mode"
            style={{
              width: '24px',
              height: '24px',
              // ניתן לשחק עם ה־filter אם רוצים להחליף צבעים במצב כהה
              filter: darkMode ? 'brightness(0) invert(1)' : 'none'
            }}
          />
        </button>

        {/* כפתור החלפת שפה (דגל ארה"ב / דגל ישראל) */}
        <button
          onClick={toggleLanguage}
          style={{
            background: 'none',
            border: 'none',
            padding: '4px 8px',
            cursor: 'pointer',
            marginLeft: '10px'
          }}
        >
         <img
		src={language === 'en' ? israelFlagIcon : usFlagIcon}
  alt={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
  style={{ width: '24px', height: '24px' }}
/>

        </button>
      </nav>
    </header>
  );
};

export default Header;
