import React from 'react';
import './logo-component.css';

const ELHLogo = ({ size = 'medium', animated = true }) => {
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium',
    large: 'logo-large'
  };

  return (
    <div className={`elh-logo-container ${sizeClasses[size]} ${animated ? 'animated' : ''}`}>
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        className="elh-logo-svg"
      >
        {/* Outer Circle */}
        <circle
          className="outer-circle"
          cx="150"
          cy="150"
          r="145"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />

        {/* Background */}
        <circle cx="150" cy="150" r="140" fill="#000000" />

        {/* Bubble Group */}
        <g className="bubble-group">
          {/* Left Bubble (World) */}
          <circle cx="110" cy="115" r="55" fill="#003d99" stroke="#1a5bbf" strokeWidth="2" />

          {/* World Map */}
          <g className="world-map">
            <path d="M 85 95 Q 90 90 95 95 Q 92 105 87 105 Z" fill="#ffc107" opacity="0.9" />
            <path d="M 100 105 Q 105 110 102 120 Q 97 115 98 105 Z" fill="#ffc107" opacity="0.9" />
            <path d="M 115 90 Q 125 85 130 95 Q 125 110 115 105 Z" fill="#ffc107" opacity="0.9" />
          </g>

          {/* Right Bubble (Book) */}
          <circle cx="190" cy="115" r="55" fill="#003d99" stroke="#1a5bbf" strokeWidth="2" />

          {/* Book Design */}
          <g className="elh-text">
            <path
              d="M 165 90 L 185 85 L 215 85 L 195 90 Z"
              fill="none"
              stroke="#ffc107"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="165"
              y="90"
              width="50"
              height="50"
              fill="none"
              stroke="#ffc107"
              strokeWidth="2.5"
              rx="3"
            />
            <text
              x="190"
              y="125"
              fontSize="28"
              fontWeight="bold"
              fill="#ffc107"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
            >
              ELH
            </text>
          </g>
        </g>

        {/* English Text */}
        <text
          className="english-text"
          x="150"
          y="190"
          fontSize="26"
          fontWeight="bold"
          fill="#003d99"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          English
        </text>

        {/* Learning Hub Text */}
        <text
          className="hub-text"
          x="150"
          y="225"
          fontSize="24"
          fontWeight="bold"
          fill="#ffc107"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          Learning Hub
        </text>
      </svg>
    </div>
  );
};

export default ELHLogo;
