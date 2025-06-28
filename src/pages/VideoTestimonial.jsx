import { useState } from "react";

const videos = [
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    name: "Member 1",
  },
  {
    url: "https://www.w3schools.com/html/movie.mp4",
    name: "Member 2",
  },
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    name: "Member 3",
  },
];

export default function VideoTestimonials() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 2;

  const next = () => {
    if (index + itemsPerPage < videos.length) setIndex(index + itemsPerPage);
  };
  const prev = () => {
    if (index - itemsPerPage >= 0) setIndex(index - itemsPerPage);
  };

  return (
    <div className="relative bg-[#0f0f1b]  text-white px-6 py-20 min-h-screen overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-white">Hear from the members</h2>
      </div>

      <div className="flex justify-center items-center gap-8 transition-all duration-500">
        {videos.slice(index, index + itemsPerPage).map((v, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 max-w-xl w-full"
          >
            <video
              controls
              className="w-full h-[600px] object-cover"
              poster="https://via.placeholder.com/300x400.png?text=Preview"
            >
              <source src={v.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-white">{v.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">←</span>
      </button>
      <button
        onClick={next}
        disabled={index + itemsPerPage >= videos.length}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">→</span>
      </button>


    </div>
  );
}