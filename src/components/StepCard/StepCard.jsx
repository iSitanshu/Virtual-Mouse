// StepCard.js
import React from 'react';
import './StepCard.css';

const StepCard = ({ stepNumber, stepImage, stepTitle, stepDescription, buttonLabel, onButtonClick, isCenter }) => {
  return (
    <div className={`step-card ${isCenter ? 'center-card' : ''}`}>
      <div className="step-content">
        <div className="step-number">Step {stepNumber}</div>
        <img src={stepImage} alt={`Step ${stepNumber}`} />
        <div className="step-title">{stepTitle}</div>
        <div className="step-description">{stepDescription}</div>
        {buttonLabel && onButtonClick && (
          <button className="step-button" onClick={onButtonClick}>
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
}

export default StepCard;
