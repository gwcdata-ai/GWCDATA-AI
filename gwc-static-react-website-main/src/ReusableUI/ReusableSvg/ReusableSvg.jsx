import React from 'react';

const CustomArrow = ({ color = '#6F2B8C', width = 20, height = 21 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="arrow-right">
        <path
          id="Icon"
          d="M4.16675 10.1207H15.8334M15.8334 10.1207L10.0001 4.28735M15.8334 10.1207L10.0001 15.954"
          stroke={color}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CustomArrow;
