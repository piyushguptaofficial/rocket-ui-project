import React from 'react';

const HeroCard = ({ heading, subHeading }) => {
  return (
    <div
      className="bg-[var(--glass-bg)] text-[var(--color-text)] backdrop-blur-lg border border-white/10
      shadow-md rounded-2xl px-6 py-4 w-full max-w-xs text-center transition transform hover:scale-105 hover:shadow-xl duration-300 m-2"
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{heading}</h3>
      <p className="text-base text-[var(--color-subtext)]">{subHeading}</p>
    </div>
  );
};

export default HeroCard;




