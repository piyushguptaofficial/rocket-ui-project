import React from 'react';

const Skeleton = ({ className = '' }) => {
  return (
    <div className={`bg-gray-700 rounded animate-pulse ${className}`} />
  );
};

export default Skeleton;
