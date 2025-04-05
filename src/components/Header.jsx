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
  const isJobSearchPage = location.pathname === "/job-search";
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
        // בעמוד הבית – מציגים רק את קישור "Job Search"
        <nav className="header-nav">
          <ul>
            <li>
              <Link
                to="/job-search"
                className={activePage === "/job-search" ? "active" : ""}
              >
                Job Search
              </Link>
            </li>
          </ul>
        </nav>
      ) : (isJobSearchPage || isSingleLinkOnly) ? (
        // בעמוד Job Search ובדפים של Meyrav's CV Tips, Noa's Guide, meet-meyrav – מציגים רק את קישור "Home"
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
        // בכל שאר העמודים – מציגים את התפריט המלא
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
            <li>
              <Link
                to="/job-search"
                className={activePage === "/job-search" ? "active" : ''}
                onClick={() => setIsOpen(false)}
              >
                Job Search
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
