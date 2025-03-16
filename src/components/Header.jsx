// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import darkThemeIcon from '../img/dark-theme-svgrepo-com.svg'; // Import dark/light mode icon
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const activePage = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  // Define menu items only for non-landing pages
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
          </>
        )}
        <button
          className={`dark-mode-toggle ${isLandingPage ? 'landing-toggle' : ''}`}
          onClick={toggleDarkMode}
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <img
            src={darkThemeIcon}
            alt="Toggle dark/light mode"
            style={{
              width: '24px',
              height: '24px',
              filter: darkMode ? 'brightness(0) invert(1)' : 'none',
              transform: 'translate(-80px, -22px)', // Shifted a bit to the right relative to previous -100px
            }}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
