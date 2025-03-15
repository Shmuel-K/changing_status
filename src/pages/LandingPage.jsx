// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the first page of your content
    navigate('/page/1');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Next Step in High-Tech</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
        style={{ transform: 'translateX(40px)' }} // Adjust this value to shift the button to the right
      >
        Alon's Ten Steps
      </button>
    </div>
  );
};

export default LandingPage;
