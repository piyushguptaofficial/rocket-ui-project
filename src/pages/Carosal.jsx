import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


// 📦 Course Data
const COURSE_SLIDES = [
  {
    title: "Design Motion Course",
    description: "Master motion design with hands-on projects.",
    rating: 5,
    image: "/devtools.jpg",
  },
  {
    title: "UI/UX Bootcamp",
    description: "Learn design systems and UX flows.",
    rating: 4,
    image: "/Ui.jpg",
  },
  {
    title: "Frontend Animation",
    description: "Animate UI with React + Framer Motion.",
    rating: 4.5,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Web3 Development",
    description: "Build dApps using Solidity and Ethereum.",
    rating: 4,
    image: "/Web3.jpg",
  },
  {
    title: "JavaScript Mastery",
    description: "Deep dive into modern JavaScript features.",
    rating: 5,
    image: "/Javascript.jpg",
  },
  {
    title: "React Native Essentials",
    description: "Create mobile apps using React Native.",
    rating: 4,
    image: "/.jpg",
  },
  {
    title: "Tailwind CSS in Practice",
    description: "Design fast with utility-first styling.",
    rating: 4.5,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Framer Motion Tricks",
    description: "Add stunning animations in React.",
    rating: 5,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Figma for Developers",
    description: "Translate Figma designs to code effectively.",
    rating: 4,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Next.js Fullstack Guide",
    description: "Learn SSR, API routes, and deployment.",
    rating: 5,
    image: "/Next.jpg",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [enableTransition, setEnableTransition] = useState(true);
  const autoplayRef = useRef(null);

  const extendedSlides = [...COURSE_SLIDES, ...COURSE_SLIDES.slice(0, slidesToShow)];
  const maxIndex = extendedSlides.length - slidesToShow;

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) setSlidesToShow(1);
    else if (width < 1024) setSlidesToShow(2);
    else setSlidesToShow(3);
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [slidesToShow]);

  useEffect(() => {
    if (index === maxIndex) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 500);
    } else {
      setEnableTransition(true);
    }
  }, [index, maxIndex]);

  const handlePrev = () => {
    stopAutoplay();
    setIndex((prev) =>
      prev <= 0 ? extendedSlides.length - slidesToShow * 2 : prev - 1
    );
    startAutoplay();
  };

  const handleNext = () => {
    stopAutoplay();
    setIndex((prev) => prev + 1);
    startAutoplay();
  };

  const translateX = `-${(100 / slidesToShow) * index}%`;

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 font-inter">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">
        Our Popular Courses
      </h2>

      {/* Desktop Navigation */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <ChevronLeftIcon className="text-gray-800 dark:text-white" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <ChevronRightIcon className="text-gray-800 dark:text-white" />
        </button>
      </div>

      {/* Carousel Content */}
      <div className="overflow-hidden pb-8">
        <motion.div
          className="flex"
          animate={{ x: translateX }}
          transition={
            enableTransition
              ? { type: "spring", stiffness: 100, damping: 20 }
              : { duration: 0 }
          }
        >
          {extendedSlides.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <CourseCard {...card} />
            </div>
          ))}
        </motion.div> 
      </div>

      {/* Mobile/Tablet Bottom Navigation */}
      <div className="flex justify-center gap-6 mt-4 lg:hidden">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <ChevronLeftIcon className="text-gray-800 dark:text-white" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <ChevronRightIcon className="text-gray-800 dark:text-white" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;