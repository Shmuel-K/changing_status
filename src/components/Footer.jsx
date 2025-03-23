// src/components/Footer.jsx
import React from 'react';
import linkedInIcon from '../img/icons8-linkedin.svg'; // וודא שזה הנתיב הנכון
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <a
        href="https://www.linkedin.com/in/shmuelkirshenboim"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedInIcon}
          alt="LinkedIn"
        />
      </a>
    </footer>
  );
};

export default Footer;
