import React from "react";

interface BlinkingDotProps {
  color?: string;
}

const BlinkingDot: React.FC<BlinkingDotProps> = ({ color }) => {
  return (
    <div
      className={`${color} h-4 w-4 rounded-full`}
    />
  );
};

export default BlinkingDot;
