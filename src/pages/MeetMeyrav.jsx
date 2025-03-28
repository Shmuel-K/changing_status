// src/pages/MeetMeyrav.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import meyravImage from '../img/Meyrav.jpeg';
import linkedinIcon from '../img/linkedin-social-media-svgrepo-com.svg';
import { LanguageContext } from '../context/LanguageContext';
import meetMeyravEn from '../locales/en/meetMeyrav';
import meetMeyravHe from '../locales/he/meetMeyrav';

const MeetMeyrav = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const text = language === 'en' ? meetMeyravEn : meetMeyravHe;

  const handleNext = () => { navigate('/cv-tips'); };

  const containerStyle = {
    background: 'linear-gradient(45deg, #32CD32, #FFFF00)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '16px'
  };

  const imageStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginBottom: '12px'
  };

  const textContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '8px',
    borderRadius: '8px',
    maxWidth: '300px',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

  const paragraphStyle = {
    fontSize: '12px',
    marginBottom: '8px'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '600',
    color: '#0A66C2',
    textDecoration: 'none',
    marginBottom: '8px'
  };

  const iconStyle = {
    width: '8px',
    height: '8px',
    marginRight: '4px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '6px',
    backgroundColor: '#0077b5',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={containerStyle}
    >
      <img src={meyravImage} alt={text.heading} style={imageStyle} />
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>{text.heading}</h1>
        <p style={paragraphStyle}>{text.description}</p>
        <a
          href="https://www.linkedin.com/in/meyravcg"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img src={linkedinIcon} alt="LinkedIn" style={iconStyle} />
          {text.linkedinText}
        </a>
        <button onClick={handleNext} style={buttonStyle}>
          {text.buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default MeetMeyrav;
