import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sampurna Nag",
    title: "Counselling Psychologist",
    image: "https://i.imgur.com/XfCc8wH.png",
    stars: 5,
    text: `The training program was packed with <mark>relatable stories</mark> and <mark>practical examples</mark> that made technical concepts come alive. It demystified the therapist’s role, emphasizing being authentic and approachable. Techniques like grounding exercises and <mark>structured case formulations</mark> were game-changers.`,
  },
  {
    name: "Celina Daniel",
    title: "Counselling Psychologist",
    image: "https://i.imgur.com/lKJiT77.png",
    stars: 5,
    text: `The sessions were incredibly engaging, with diverse perspectives from the trainers. Case discussions and mock therapy sessions were invaluable, preparing me for <mark>real-world practice</mark>. Tackling real therapy concerns like managing overabundant speech was a highlight. Overall, the training was challenging, inspiring, and rewarding—<mark>a perfect launchpad</mark>.`,
  },
  {
    name: "Arnav Gupta",
    title: "Therapist",
    image: "https://i.imgur.com/bxQeT7g.png",
    stars: 5,
    text: `Each module encouraged interaction and <mark>hands-on application</mark> of learned techniques. The structured feedback and assessments helped me refine my approach.`,
  },
  {
    name: "Priya Mehta",
    title: "Psychology Intern",
    image: "https://i.imgur.com/qkdpN.jpg",
    stars: 5,
    text: `The trainers were amazing mentors. I loved the <mark>real insight</mark> they provided into the mental health industry and ethical practices.`,
  },
  {
    name: "Ravi Sharma",
    title: "Mental Health Coach",
    image: "https://i.imgur.com/1r7U69U.png",
    stars: 5,
    text: `Loved the balance between theory and <mark>real case studies</mark>. The course structure made it easy to apply complex concepts in everyday therapy.`,
  },
  {
    name: "Sneha Rao",
    title: "Student",
    image: "https://i.imgur.com/Mhn1HZ4.png",
    stars: 5,
    text: `From foundational theories to advanced techniques, the training covered it all. <mark>Practical application</mark> really helped boost my confidence.`,
  },
];

// Skeleton card for loading state
const SkeletonCard = () => (
  <div className="animate-pulse bg-gradient-to-br from-purple-900 to-blue-900 border-purple-600 rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm p-6">
    <div className="w-24 h-4 bg-gray-700 rounded mb-4" />
    <div className="h-3 bg-gray-700 rounded w-full mb-2" />
    <div className="h-3 bg-gray-700 rounded w-5/6 mb-2" />
    <div className="h-3 bg-gray-700 rounded w-3/4 mb-4" />
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-700 rounded-full" />
      <div className="flex flex-col gap-2">
        <div className="w-24 h-3 bg-gray-700 rounded" />
        <div className="w-16 h-2 bg-gray-700 rounded" />
      </div>
    </div>
  </div>
);

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
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

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const next = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="relative bg-[#0f0f1b] text-white px-4 sm:px-6 py-20 min-h-screen overflow-hidden">
      <div className="flex justify-center flex-wrap gap-6 transition-all duration-500">
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : testimonials
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((t, i) => {
                const index = currentIndex + i;
                const isExpanded = expanded[index];
                const cleanText = t.text.replace(/<[^>]+>/g, "");
                const displayText = isExpanded
                  ? t.text
                  : cleanText.length > 200
                  ? `${cleanText.slice(0, 200)}...`
                  : t.text;

                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-800 to-blue-800 border border-purple-500 rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm p-6 hover:scale-105 hover:shadow-xl hover:shadow-purple-700 transition-transform duration-300"
                  >
                    <div className="mb-4 text-xl">{"★".repeat(t.stars)}</div>
                    <p
                      className="text-white text-sm leading-relaxed mb-3"
                      dangerouslySetInnerHTML={{ __html: `"${displayText}"` }}
                    />
                    {cleanText.length > 200 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-xs text-blue-300 underline mb-4"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    )}
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        className="w-10 h-10 rounded-full object-cover"
                        alt={t.name}
                      />
                      <div>
                        <h4 className="font-semibold">{t.name}</h4>
                        <p className="text-sm text-gray-300">{t.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">←</span>
      </button>
      <button
        onClick={next}
        disabled={currentIndex + itemsPerPage >= testimonials.length}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">→</span>
      </button>
    </div>
  );
}

