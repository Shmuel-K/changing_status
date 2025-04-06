// src/components/Header.jsx
import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import darkThemeIcon from '../img/dark-theme-svgrepo-com.svg';
import usFlagIcon from '../img/united-states-svgrepo-com.svg';
import israelFlagIcon from '../img/israel-svgrepo-com.svg';
import { LanguageContext } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  // עבור הדפים בהם מציגים קישור יחיד (כמו במצבי CV Tips, Noa's Guide, Meet Meyrav)
  const isSingleLinkOnly =
    location.pathname.startsWith("/cv-tips") ||
    location.pathname.startsWith("/noa-guide") ||
    location.pathname === "/meet-meyrav";
  const activePage = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const menuItems = [
    { pageNum: 1, text: 'Opening' },
    ...Array.from({ length: 10 }, (_, i) => ({
      pageNum: i + 2,
      text: `Step ${i + 1}`,
    })),
    { pageNum: 12, text: 'Conclusion' },
  ];

  return (
    <header className="site-header" dir="ltr">
      <h2 className="site-title">Changing Your Status</h2>

      <div className="header-icons">
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <img
            src={darkThemeIcon}
            alt="Toggle dark/light mode"
            className={`icon-img ${darkMode ? 'dark' : ''}`}
          />
        </button>
        <button className="language-toggle" onClick={toggleLanguage}>
          <img
            src={language === 'en' ? israelFlagIcon : usFlagIcon}
            alt={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
            className="icon-img"
          />
        </button>
      </div>

      {isLandingPage ? (
        // בעמוד הבית – מציגים רק קישור "Home" (ללא קישור ל־Job Search)
        <nav className="header-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={activePage === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      ) : isSingleLinkOnly ? (
        // בדפים כמו CV Tips, Noa's Guide, Meet Meyrav – מציגים רק קישור "Home"
        <nav className="header-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={activePage === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        // בכל שאר העמודים – מציגים את התפריט המלא ללא קישור "Job Search"
        <nav className="header-nav">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={isOpen ? 'open' : ''}>
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
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
