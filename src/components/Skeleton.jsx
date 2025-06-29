// src/components/Skeleton.jsx
import React from 'react';

const Skeleton = ({ className = '', rounded = 'rounded-md' }) => {
  return (
    <div className={`bg-gray-700 animate-pulse ${rounded} ${className}`} />
  );
};

export default Skeleton;

