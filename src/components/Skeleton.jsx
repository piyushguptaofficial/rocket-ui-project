// src/components/Skeleton.jsx
import React from 'react';

const Skeleton = ({ className = '' }) => (
  <div className={`bg-gray-700 rounded animate-pulse ${className}`} />
);

export default Skeleton;

