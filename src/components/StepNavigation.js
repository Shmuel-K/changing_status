import React from 'react';

const StepNavigation = ({ currentStep, nextStep, goBack, steps }) => {
  return (
    <div className="mt-6 flex justify-between">
      {currentStep > 0 && (
        <button onClick={goBack} className="px-5 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition transform hover:scale-105 shadow-md">
          חזור
        </button>
      )}
      <button onClick={nextStep} className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
        {currentStep === steps.length - 1 ? "סיום" : "הבא"}
      </button>
    </div>
  );
};

export default StepNavigation;
