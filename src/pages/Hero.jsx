import React, { useEffect, useState } from "react";
import HeroCard from "../components/HeroCard";
import Button from "../components/Button";

const SkeletonHeroCard = () => (
  <div className="animate-pulse bg-gradient-to-br from-purple-900 to-blue-900 border-purple-600 rounded-2xl w-[300px] h-[150px] p-6">
    <div className="w-32 h-5 bg-gray-700 rounded mb-4" />
    <div className="w-48 h-3 bg-gray-700 rounded" />
    
  </div>
);

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#0f0f1b] text-[var(--color-text)] py-10 px-6 md:px-10 relative">
      {/* Gradient circle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[var(--my-gradient)] opacity-10 rounded-full blur-[200px] absolute top-0 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Text Content */}
      <div className="relative max-w-7xl mx-auto text-center mb-6">
        <h1 className="gap-3 text-4xl md:text-6xl font-extrabold mb-4">
          {loading ? (
            <div className="h-12 w-80 mx-auto bg-gray-700 rounded animate-pulse" />
          ) : (
            <>
              Welcome to
              <span className="m-2 italic bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)]">
                Rocket Academy
              </span>
            </>
          )}
        </h1>

        <p className="text-lg md:text-xl text-[var(--color-text)] max-w-3xl mx-auto">
          {loading ? (
            <div className="h-5 w-96 bg-gray-700 mx-auto rounded animate-pulse" />
          ) : (
            "Learn, Build and Launch your dream career with modern web development skills."
          )}
        </p>
      </div>

      {/* Cards */}
      <div className="relative flex flex-wrap justify-center gap-3 max-w-7xl mx-auto">
        {loading ? (
          <>
            <SkeletonHeroCard />
            <SkeletonHeroCard />
            <SkeletonHeroCard />
          </>
        ) : (
          <>
            <HeroCard
              heading="Frontend Mastery"
              subHeading="React, Tailwind, and modern UI/UX"
            />
            <HeroCard
              heading="Backend Mastery"
              subHeading="Node.js, Express, MongoDB"
            />
            <HeroCard
              heading="Deploy Like a Pro"
              subHeading="CI/CD, Vercel, Netlify & GitHub"
            />
          </>
        )}
      </div>

      {/* Scroll target for apply */}
      <div id="apply" className="relative text-center py-6">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">
          {loading ? (
            <div className="h-6 w-72 mx-auto bg-gray-700 rounded animate-pulse" />
          ) : (
            "Ready to Launch Your Journey?"
          )}
        </h2>
        <p className="text-[var(--color-text)] max-w-xl mx-auto mb-6">
          {loading ? (
            <div className="h-4 w-96 bg-gray-700 mx-auto rounded animate-pulse" />
          ) : (
            "Click below and start your web development career today."
          )}
        </p>
        {!loading && (
          <Button
            button_text="Apply Now"
            className="px-6 py-3 text-[1.3rem] transition-all duration-300
              shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              dark:shadow hover:dark:shadow-[0_10px_30px_rgba(56,189,248,0.4)]
              hover:scale-105"
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;

