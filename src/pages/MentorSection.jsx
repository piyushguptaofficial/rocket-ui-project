import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const mentors = [
  {
    name: "Kalyani Vaish",
    title: "Lead Counselling Psychologist",
    image: "https://i.imgur.com/z8Xh2iN.png",
  },
  {
    name: "Harleen Aneja",
    title: "Counselling Psychologist",
    image: "https://i.imgur.com/Mhn1HZ4.png",
  },
  {
    name: "Bidisha Samanta",
    title: "RCI Registered Clinical Psychologist",
    image: "https://i.imgur.com/1r7U69U.png",
  },
  {
    name: "Ravi Sharma",
    title: "Mental Health Coach",
    image: "https://i.imgur.com/XfCc8wH.png",
  },
  {
    name: "Sneha Rao",
    title: "Student Intern",
    image: "https://i.imgur.com/qkdpN.jpg",
  },
];

// Skeleton Card
const SkeletonCard = () => (
  <div className="animate-pulse bg-gradient-to-br from-purple-900 to-blue-900 border border-purple-600 rounded-2xl flex-shrink-0 w-[90%] sm:w-[calc(100%/2-24px)] lg:w-[calc(100%/3-32px)] max-w-sm p-6">
    <div className="w-full h-80 bg-gray-700 rounded-md mb-4" />
    <div className="text-center space-y-2">
      <div className="h-4 w-32 bg-gray-700 mx-auto rounded" />
      <div className="h-1 w-10 bg-gray-600 mx-auto" />
      <div className="h-3 w-48 bg-gray-700 mx-auto rounded" />
    </div>
  </div>
);

export default function MentorSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [loading, setLoading] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const prev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const next = () => {
    if (currentIndex + itemsPerPage < mentors.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) next();
    else if (distance < -50) prev();
  };

  return (
    <div
      className="relative min-h-screen bg-[#0f0f1b] text-[var(--color-text)] px-4 sm:px-6 py-20 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-400 tracking-widest uppercase">Meet Our Mentors</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
          Guided by world-class psychologists,
          <br className="hidden sm:block" />
          every week.
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 transition-all duration-500 justify-center">
          {loading
            ? Array.from({ length: itemsPerPage }).map((_, i) => <SkeletonCard key={i} />)
            : mentors.slice(currentIndex, currentIndex + itemsPerPage).map((mentor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-800 to-blue-800 border border-purple-500 rounded-2xl flex-shrink-0 w-[90%] sm:w-[calc(100%/2-24px)] lg:w-[calc(100%/3-32px)] max-w-sm p-6 hover:scale-105 hover:shadow-xl hover:shadow-purple-700 transition-transform duration-300"
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-80 object-cover rounded-md mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <div className="w-10 h-[2px] bg-white mx-auto my-2" />
                    <p className="text-sm text-gray-200">{mentor.title}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <AiOutlineLeft size={24} />
      </button>

      <button
        onClick={next}
        disabled={currentIndex + itemsPerPage >= mentors.length}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  );
}

