// FAQPage.jsx
import { useState, useEffect } from "react";
import { LuChevronDown } from "react-icons/lu";

// FAQ data
const faqs = [
  {
    id: 1,
    question: "Will Rocket Academy help me get a job?",
    answer:
      "Not directly, but the program equips you with the practical skills and confidence required to land roles in the mental health field...",
  },
  {
    id: 2,
    question: "Will Rocket Health hire me after Rocket Academy?",
    answer:
      "You’ll need to go through our hiring process for academy members. If selected, your program fee will be completely reimbursed.",
  },
  // Add remaining questions as before...
];

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f1b] font-Inter text-[#547792]">
      {/* Heading */}
      <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 py-10">
        <span className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-semibold leading-tight bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ content */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonFAQ key={i} />
            ))
          : faqs.map(({ id, question, answer }) => (
              <div
                key={id}
                className="border-b border-white/20 py-4 transition-all duration-300"
              >
                <button
                  aria-expanded={openId === id}
                  aria-controls={`faq-answer-${id}`}
                  onClick={() => toggle(id)}
                  className="flex w-full items-center justify-between text-left text-lg font-medium text-white focus:outline-none"
                >
                  <span>{question}</span>
                  <span
                    className={`transition-transform duration-300 ${
                      openId === id ? "rotate-180" : ""
                    }`}
                  >
                    <LuChevronDown size={22} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${id}`}
                  className={`overflow-hidden transition-all duration-500 ${
                    openId === id
                      ? "max-h-96 pt-2 opacity-100"
                      : "max-h-0 opacity-0"
                  } text-white/75`}
                >
                  {answer}
                </div>
              </div>
            ))}

        {/* Contact CTA */}
        {!loading && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Still have questions?
            </h2>
            <p className="mt-4 text-white/70">
              Reach out to our team by email and we’ll be happy to help:
            </p>
            <button className="mt-6 rounded-full border border-pink-300 bg-gradient-to-r from-pink-500 to-purple-600 bg-[130%_auto] px-10 py-3 text-white transition-all duration-500 hover:bg-right hover:shadow-[0_0_15px_rgba(236,72,153,0.6)]">
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ✅ Skeleton loader for each FAQ
const SkeletonFAQ = () => (
  <div className="border-b border-white/10 py-4 animate-pulse space-y-2">
    <div className="h-5 w-3/4 rounded bg-gray-700" />
    <div className="h-4 w-1/2 rounded bg-gray-800" />
  </div>
);
