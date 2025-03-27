// src/pages/MeetMeyrav.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import meyravImage from '../img/Meyrav.jpeg';
import linkedinIcon from '../img/linkedin-social-media-svgrepo-com.svg';

const MeetMeyrav = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/cv-tips');
  };

  // Inline style objects for a completely different method:
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
    width: '32px', // very small image
    height: '32px',
    borderRadius: '50%', // circular image
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
    width: '8px', // very small icon
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
      <img src={meyravImage} alt="Meyrav" style={imageStyle} />
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>Meet Meyrav</h1>
        <p style={paragraphStyle}>
          My name is Meyrav. I am a graduate of the Hebrew University in the Department of Computer Science,
          specializing in Google. In my free time, I share posts on LinkedIn and help students who are searching for their
          first job. I enjoy spending time with my family, playing board games, and reading literature and poetry 😊
        </p>
        <a
          href="https://www.linkedin.com/in/meyravcg?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNuQcw7qvSnOzJ4qU3%2FNSSg%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img src={linkedinIcon} alt="LinkedIn" style={iconStyle} />
          Connect on LinkedIn
        </a>
        <button onClick={handleNext} style={buttonStyle}>
          Continue to CV Tips
        </button>
      </div>
    </motion.div>
  );
};

export default MeetMeyrav;
