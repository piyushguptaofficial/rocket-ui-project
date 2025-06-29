import { useState } from "react";

const videos = [
  {
    url: "https://www.youtube.com/embed/BTIHu6qjmH0?si=zsWXJn4tBxa1LJEr",
  },
  {
    url: "https://www.youtube.com/embed/rrMQ8E8qJc4?si=S1taaMxIErgDY9Kd",
  },
  {
    url: "https://www.youtube.com/embed/1qv4bifHSK8?si=oZYttd209dkpdPpH",
  },
  {
    url: "https://www.youtube.com/embed/foWwgCMNitI?si=xybBbxiJnNxpdU0-",
  },
  {
    url: "https://www.youtube.com/embed/FVIQcT2sNjg?si=bOkyLRWPl_x9xqzk",
  },
];

export default function VideoTestimonials() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(videos.length).fill(false)); // loading state for each video
  const itemsPerPage = 3;

  const next = () => {
    if (index + itemsPerPage < videos.length) setIndex(index + itemsPerPage);
  };

  const prev = () => {
    if (index - itemsPerPage >= 0) setIndex(index - itemsPerPage);
  };

  const handleLoad = (i) => {
    setLoaded((prev) => {
      const updated = [...prev];
      updated[i] = true;
      return updated;
    });
  };

  return (
    <div className="relative min-h-screen bg-[#0f0f1b] text-white px-6 py-20 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Hear from the Members
      </h2>

      {/* Video Cards */}
      <div className="flex sm:flex-wrap flex-nowrap overflow-x-auto gap-6 sm:justify-center w-full px-2">
        {videos.slice(index, index + itemsPerPage).map((v, i) => {
          const actualIndex = index + i;

          return (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-700 to-purple-700 rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-transform hover:scale-105 min-w-[300px] w-[360px] flex-shrink-0 relative"
            >
              {/* Skeleton Loader */}
              {!loaded[actualIndex] && (
                <div className="absolute inset-0 z-10 animate-pulse bg-gray-700/30" />
              )}

              {/* YouTube Video */}
              <iframe
                src={v.url}
                title={`video-${i}`}
                className={`w-full h-[400px] transition-opacity duration-500 ${
                  loaded[actualIndex] ? "opacity-100" : "opacity-0"
                }`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => handleLoad(actualIndex)}
              ></iframe>

              <div className="p-4 text-center bg-white/10">
                <h3 className="text-lg font-semibold">{v.name || " "}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="hidden sm:flex gap-6 mt-12">
        <button
          onClick={prev}
          disabled={index === 0}
          className="bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={index + itemsPerPage >= videos.length}
          className="bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}
