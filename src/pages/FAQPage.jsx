// FAQPage.jsx
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

/* ─────────────────────────────────────────
   FAQ DATA (kept outside the component)
   ───────────────────────────────────────── */
const faqs = [
  {
    id: 1,
    question: "Will Rocket Academy help me get a job?",
    answer:
      "Not directly, but the program equips you with the practical skills and confidence required to land roles in the mental health field. You can apply to Rocket Health from here after completing the course.",
  },
  {
    id: 2,
    question: "Will Rocket Health hire me after Rocket Academy?",
    answer:
      "You’ll need to go through our hiring process for academy members. If selected, your program fee will be completely reimbursed.",
  },
  {
    id: 3,
    question: "Who should join Rocket Academy?",
    answer:
      "Psychologists who want hands-on experience and are committed to bridging the gap between theory and practice.",
  },
  {
    id: 4,
    question: "Who shouldn’t join Rocket Academy?",
    answer:
      "Those still 6+ months from completing their Master’s or not ready to dedicate time and effort to skill-building.",
  },
  {
    id: 5,
    question: "Is this a remote program? How much time will I need to commit?",
    answer:
      "Yes, it’s remote. You’ll need to dedicate 2-4 hours per day (Monday-Saturday) for six weeks. All core sessions are held Monday to Friday from 10 AM to 5 PM, with scheduled breaks. We recommend allocating about 30 hours per week to get the most out of the cohort experience.",
  },
  {
    id: 6,
    question: "Will I get to meet my fellow cohort members?",
    answer:
      "Yes, we’ll host offline events starting in Bangalore, specially curated for academy members, beginning in 2025.",
  },
  {
    id: 7,
    question: "What else will I get?",
    answer: "Exclusive early access to new course launches by Rocket Academy.",
  },
  {
    id: 8,
    question: "What kind of support will I get during the program?",
    answer:
      "You’ll receive guidance from experienced mentors, access to learning materials, and opportunities to engage with peers and instructors for feedback.",
  },
  {
    id: 9,
    question: "Are there assessments or certifications at the end of the program?",
    answer:
      "Yes, you’ll complete assessments to track your progress and receive a certificate of completion upon graduating.",
  },
  {
    id: 10,
    question: "What practical exposure will I gain?",
    answer:
      "You’ll work on case discussions, mock sessions, and real-world scenarios to build confidence and skills.",
  },
  {
    id: 11,
    question: "Will I get to work with real users?",
    answer:
      "Yes, selected academy members who excel during the program will gain access to real users. These users, volunteers from our community and networks, will participate in free sessions.",
  },
];

/* ─────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────── */
export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-[#0f0f1b] font-Inter text-[#547792]">
      {/* Hero / Heading */}
      <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 py-10">
        <span className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-semibold leading-tight bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ list */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        {faqs.map(({ id, question, answer }) => (
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

            {/* answer */}
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

        {/* Still have questions? */}
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
      </div>
    </div>
  );
}
