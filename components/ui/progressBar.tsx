// CircularProgressBar.tsx

import React from "react";

interface CircularProgressBarProps {
  percentage: number;
  size?: number; // Size of the circular progress bar
  strokeWidth?: number; // Width of the stroke
  colors?: {
    stroke: string;
    trail: string;
  };
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  size = 40,
  strokeWidth = 4,
  colors = { stroke: "bg-green-500", trail: "bg-gray-200" },
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size}>
      <circle
        className={`${colors.trail} rounded-full`}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className={`${colors.stroke} rounded-full`}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }} // Animation for the progress change
      />
    </svg>
  );
};

export default CircularProgressBar;
