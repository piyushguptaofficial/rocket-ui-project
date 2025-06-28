import React from 'react';

const StarIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.922-7.416 3.922 1.48-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);

const RatingStars = ({ rating = 0 }) => {
  return (
    <div className="flex space-x-1" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          <StarIcon filled={i < rating} />
        </span>
      ))}
    </div>
  );
};

export default RatingStars;