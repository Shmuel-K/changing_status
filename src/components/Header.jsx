// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const activePage = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // מגדירים את פריטי התפריט:
  // Opening - עמוד 1, Steps 1-10 - עמודים 2 עד 11, Conclusion - עמוד 12
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
        {/* כפתור תפריט המבורגר שיופיע במובייל */}
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
