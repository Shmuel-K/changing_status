// src/Step.js
import React from 'react';

const Step = ({ step }) => {
  return (
    <div 
      className="relative bg-cover bg-center rounded-lg p-6 max-w-4xl flex flex-col md:flex-row items-center text-right"
      style={{ backgroundImage: `url(${step.background})` }}
      role="article"
    >
      {/* שכבת אוברליי לשיפור הניגודיות */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg" aria-hidden="true"></div>
      <div className="relative z-10 flex-1">
        <h2 className="text-3xl font-bold text-white">{step.title}</h2>
        <p className="mt-4 leading-relaxed text-white whitespace-pre-line">{step.content}</p>
      </div>
    </div>
  );
};

export default Step;
