// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  // Page 1 = "Opening", Pages 2-11 = Steps 1-10, Page 12 = "Conclusion"
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
        {/* Dark/Light mode toggle button */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
