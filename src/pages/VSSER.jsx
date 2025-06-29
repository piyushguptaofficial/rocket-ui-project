import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';
import Skeleton from '../components/Skeleton';


const VSSER = () => {
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
    }, [] );

  const points = [
    "Learn how to design, conduct, and publish high-quality entrepreneurship research.",
    "Hear directly from senior scholars and editors shaping the future of the field.",
    "Connect with a diverse, international community of researchers.",
    "Access expert-led sessions, all at no cost.",
  ];

  const impacts = [
    "Empowered 1,000+ participants from more than 35 countries, cutting across academic, geographic, and socio-economic boundaries.",
    "Provided free, high-quality training on conducting, publishing, and critically engaging with entrepreneurship research.",
    "Connected early-stage researchers with leading global scholars, journal editors, and established academics in the field.",
    "Fostered an inclusive, diverse research community committed to strengthening entrepreneurship as a field of inquiry.",
    "Contributed to making research knowledge more accessible, especially for scholars from emerging and underrepresented regions.",
  ];

  return (
    <div className="w-full px-4 py-20 sm:px-6 lg:px-20 text-white bg-[#0f0f1b]">
      <div className="max-w-5xl mx-auto space-y-10">

          {/* About Heading */}
        <FadeInSection>
            {loading ? (
                <Skeleton className='w-2/3 h-10 mx-auto'/>
            ):(
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About VSSER
          </motion.h1>
            )}
        </FadeInSection>

     {/* Intro Paragraphs */}
        {[0, 1] .map(i => (
        <FadeInSection key = {i}>
            {loading ? (
                <div className='space-y-2'>
                    <Skeleton className='w-full h-4'/>
                    <Skeleton className='w-3/4 h-4' />

                </div>

            ):(
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {i === 0 
            ?"The Virtual Summer School in Entrepreneurship Research (VSSER) is a global, no-fee academic platform designed to build research capacity in the field of entrepreneurship. Established in 2021, VSSER has quickly grown into one of the most accessible and widely attended initiatives for emerging scholars, attracting over 1,000 participants from more than 35 countries in its first four years."
            :"VSSER provides an opportunity to learn directly from leading researchers, gain insights into publishing in top-tier entrepreneurship journals, and connect with a global network of like-minded individuals passionate about entrepreneurship research. Whether you are a student, early-career researcher, or an aspiring academic, VSSER offers an inclusive space to enhance your research skills, understand contemporary debates, and engage with cutting-edge scholarship."
            }
            
          </motion.p>
          )}
        </FadeInSection>
        ))}


        {/* Why join */}
        <FadeInSection>
            {loading ? (
                <Skeleton className='w-2/3 h-8'/>
            ):(
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] bg-clip-text text-transparent text-center mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Join VSSER?
          </motion.h2>
            )}
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-6 border-l-2 border-white/20 pl-6">
            {loading
              ? [...Array(4)].map((_, i) => <Skeleton key={i} className="w-full h-4" />)
              : points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="text-lg md:text-xl font-bold text-white">{point}</h4>
                  </motion.div>
                ))}
          </div>
        </FadeInSection>

        {/* Our Impact */}
        <FadeInSection>
          {loading ? (
            <Skeleton className="w-1/3 h-8" />
          ) : (
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] bg-clip-text text-transparent mt-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Impact
            </motion.h2>
          )}
        </FadeInSection>

        <FadeInSection>
          <div className="relative pl-6 border-l-2 border-white/20 space-y-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* <span className="absolute -left-[11px] top-1.5 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full shadow-sm" /> */}
                <h4 className="text-lg md:text-xl font-bold text-white">{impact}</h4>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-serif mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VSSER is not just a summer school, it is a growing international ecosystem for aspiring and established entrepreneurship researchers to learn, collaborate, and contribute to advancing knowledge in the discipline. As we celebrate the 5th edition VSSER-25, our impact continues to grow, driven by our mission to make quality entrepreneurship research accessible to all.
          </motion.p>
        </FadeInSection>

        <FadeInSection>
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-center mt-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The Man Behind This Revolution
          </motion.h2>
        </FadeInSection>

        <FadeInSection>
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-white mt-2 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Prof. Vishal Gupta
          </motion.h3>
        </FadeInSection>

        <FadeInSection>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            At the heart of the Virtual Summer School in Entrepreneurship Research (VSSER) is Prof. Vishal Gupta, a globally respected scholar, educator, and mentor, committed to making entrepreneurship research accessible to aspiring scholars worldwide.
          </motion.p>
        </FadeInSection>

        <FadeInSection>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Prof. Gupta brings over two decades of academic excellence to VSSER. With more than 100 peer-reviewed journal publications, his research spans some of the most prestigious outlets in the field, including the Academy of Management Journal, Journal of Applied Psychology, Journal of Financial Economics, and the Journal of Management, among others.
          </motion.p>
        </FadeInSection>

        <FadeInSection>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            An expert in strategic management and entrepreneurship, Prof. Gupta’s teaching portfolio extends from undergraduate classrooms to PhD seminars, with students and scholars benefiting from his expertise across the United States, India, and Bahrain. His global outlook and dedication to scholarly capacity-building inspired the launch of VSSER in 2021—a free, inclusive platform that has already impacted over 1,000 participants from 35+ countries.
          </motion.p>
        </FadeInSection>

        <FadeInSection>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Beyond academia, Prof. Gupta is a sought-after professional speaker, delivering impactful sessions for students, business executives, and small business owners on career advancement, entrepreneurship, and research excellence. His vision for VSSER is simple yet powerful: to democratize access to world-class entrepreneurship research training, foster a global research community, and mentor the next generation of scholars shaping the future of entrepreneurship.
          </motion.p>
        </FadeInSection>
      </div>
    </div>
  );
};

export default VSSER;
