//page -> SuccessSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabData = [
  {
    title: "Expert-Led Sessions",
    content:
      "Learn from experienced professionals specializing in CBT, DBT, ACT, couples therapy, cultural competence, and more, ensuring a comprehensive and diverse learning experience.",
    image: "/success1.jpg",
  },
  {
    title: "Structured Training Programs",
    content:
      "Five progressive levels guide your journey: from mastering foundational skills to advanced case mastery, eclectic expertise, and reflective practices, culminating in a celebratory graduation. Each path is tailored to your unique needs and career goals.",
    image: "/success2.jpg",
  },
  {
    title: "Community & Mentorship",
    content:
      "Join a supportive network of peers and mentors, fostering continuous learning and growth through feedback, discussions, and Q&A sessions.",
    image: "/success3.jpg",
  },
  {
    title: "Certification & Beyond",
    content:
      "Receive certification upon graduation, showcasing your skills and commitment. Build lifelong competencies to thrive as a confident psychologist",
    image: "/success4.jpg",
  },
];

const SuccessSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="w-full py-16 px-4 sm:px-6"
      style={{ background: "#0f0f1b", color: "var(--color-text)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          Everything You Need to <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--my-gradient)" }}
          >
            Succeed as a Psychologist
          </span>
        </h2>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-3 lg:w-1/3">
            {tabData.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-left px-5 py-3 rounded-lg font-semibold transition-all duration-300
                ${
                  activeTab === i
                    ? "bg-[var(--color-accent-from)] text-white shadow-md"
                    : "bg-[var(--color-section)] hover:bg-slate-700 text-[var(--color-subtext)]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex-1 rounded-2xl shadow-xl overflow-hidden border border-white/10"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Image */}
              <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                <motion.img
                  src={tabData[activeTab].image}
                  alt={tabData[activeTab].title}
                  initial={{ opacity: 0.7, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6 sm:p-8">
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-3"
                  style={{ color: "var(--color-accent-to)" }}
                >
                  {tabData[activeTab].title}
                </h3>
                <p className="text-base sm:text-lg text-[var(--color-subtext)]">
                  {tabData[activeTab].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;