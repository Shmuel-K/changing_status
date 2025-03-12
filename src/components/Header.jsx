// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import darkThemeIcon from '../img/dark-theme-svgrepo-com.svg'; // ייבוא האייקון למצב אור/חושך
import './Header.css';

const Header = () => {
  const location = useLocation();
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

  // Define menu items:
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
        <h2>Changing Status</h2>
      </div>
      <nav>
        {/* Hamburger menu button (visible on mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        {/* Navigation menu */}
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
        </ul>
        {/* Dark/Light mode toggle button using SVG icon ללא רקע/גבול */}
        <button
          className="dark-mode-toggle"
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
              transform: 'translate(-100px, -22px)', // העברת האייקון קצת שמאלה
			  
            }}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
