import React from "react";

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  percentage?: number;
  theme?: "light" | "dark"; // Add a theme prop
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 30,
  strokeWidth = 4,
  percentage = 0,
  theme = "light", // Default to light theme
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine stroke color based on percentage
  const getStrokeColor = (percentage: number): string => {
    if (percentage >= 80) {
      return "#4caf50"; // Green for 80% and above
    } else if (percentage >= 50) {
      return "#ffeb3b"; // Yellow for 50% to 79%
    } else {
      return "#f44336"; // Red for below 50%
    }
  };

  // Determine text color based on theme
  const textColor = theme === "dark" ? "white" : "black";
  const strokeColor = getStrokeColor(percentage); // Get the stroke color based on the percentage

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="circular-progress"
    >
      {/* Background Circle */}
      <circle
        stroke="#d6d6d6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Progress Circle */}
      <circle
        stroke={strokeColor} // Set stroke color based on percentage
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
      />
      {/* Percentage Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="6"
        fill={textColor} // Use the determined text color
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgress;
