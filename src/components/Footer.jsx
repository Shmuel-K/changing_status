// src/components/Footer.jsx
import React from 'react';
import linkedInIcon from '../img/icons8-linkedin.svg';
import './Footer.css';  // ודא שהקובץ הזה נטען

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
          style={{ width: '30px', height: '30px' }}
        />
      </a>
    </footer>
  );
};

export default Footer;
