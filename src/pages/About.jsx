import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'; // Assuming it wraps with framer animations

const timelineData = [
  {
    title: 'Where It All Started',
    description: 'Frustration with underprepared graduates sparked the vision behind Rocket Academy.',
  },
  {
    title: 'Problem We Observed',
    description: 'Academic excellence didn’t translate to real-world readiness in mental health practices.',
  },
  
  {
    title: 'Our Solution',
    description: 'An intensive program designed to bridge this gap through experiential learning.',
  },
  {
    title: 'What Lies Ahead',
    description: 'A new generation of highly capable psychologists ready to make a real impact.',
  },
];

const About = () => {
  return (
    <div className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">

      {/* Background Image Layer
      <div
        className="absolute inset-0 bg-no-repeat bg-center blur-sm"
        style={{ backgroundImage: "url('/AboutBG.avif')", filter: "blur(8px) brightness(0.6)" }}
      /> */}

      {/* Transparent Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-[#0f0f1b] backdrop-blur-sm " />

      {/* Content Layer */}
      <div className="relative z-20 max-w-5xl mx-auto space-y-16">

        {/*Intro */}
        <FadeInSection>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-300"
          >
            After reviewing over 20,000+ applications while hiring at Rocket Health, we found a big problem:
          </motion.h1>
        </FadeInSection>

        <FadeInSection>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] bg-clip-text text-transparent"
          >
            College equips students with theory, but fails to prepare them for real-world practice.
          </motion.p>
        </FadeInSection>

        {["This issue repeatedly came up in our interviews with thousands of psychologists...",
          "Many young psychologists shared that it’s a chicken-and-egg problem...",
          "The things you own end up owning you...,","This is your life, and it's ending one minute at a time...",
          "Many have the potential to become exceptional psychologists...",
          "The industry needed more than just talent—it needed prepared, high-quality professionals...",
        ].map((text, i) => (
          <FadeInSection key={i}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-serif text-gray-200"
            >
              {text}
            </motion.p>
          </FadeInSection>
        ))}

        <FadeInSection>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif font-medium bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] bg-clip-text text-transparent"
          >
            This is why we created Rocket Academy: a training ground where young psychologists evolve into skilled, confident professionals ready to face real-world practice.
          </motion.p>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center space-y-4">
            <motion.h3 className="font-semibold text-2xl tracking-wider">6 WEEK ONLINE PROGRAM</motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold font-serif"
            >
              Master the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)]">A → Z</span> of Practical Psychology
            </motion.h2>
            <p className="text-2xl font-medium font-serif max-w-3xl mx-auto">
              We’ll help you evolve from a young psychologist to a confident, skilled professional, equipping you with hands-on experience, real-world techniques, and the confidence to excel in therapy.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="w-full flex justify-center">
            <div className="bg-[#0f0f1b] border border-white/20 rounded-xl w-full max-w-md h-64 flex items-center justify-center text-gray-300 italic">
              <img src="./AboutSection.jpeg" alt="allEyesOnMe"  />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-8 border-l-2 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] pl-6">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)]">{item.title}</h4>
                <p className="text-lg font-serif text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className='flex justify-center mt-10'>
            <Link to="/apply">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium shadow-md">
                Apply Now
              </button>
            </Link>
          </div>
        </FadeInSection>

        <FadeInSection>
          <h3 className='text-center font-light font-serif mt-4'>COHORT STARTS ON JULY 28</h3>
        </FadeInSection>
      </div>
    </div>
  );
};

export default About;