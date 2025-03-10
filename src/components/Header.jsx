// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const activePage = location.pathname;

  return (
    <header className="site-header">
      <div className="logo">
        <h2>Changing Status</h2>
      </div>
      <nav>
        <ul>
          {[
            { pageNum: 1, text: 'Opening' },  // עמוד פתיחה
            ...Array.from({ length: 10 }, (_, i) => ({
              pageNum: i + 2,
              text: `Step ${i + 1}`,
            })), // שלבים 1 עד 10
            { pageNum: 12, text: 'Conclusion' }, // עמוד סיכום
          ].map(({ pageNum, text }) => (
            <li key={pageNum}>
              <Link
                to={`/page/${pageNum}`}
                className={activePage === `/page/${pageNum}` ? 'active' : ''}
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
