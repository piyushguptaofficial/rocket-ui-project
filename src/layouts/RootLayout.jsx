import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../pages/Hero';
import VSSER from '../pages/VSSER';
import About from '../pages/About';
import Course from '../pages/Course';
import Testimonial from '../pages/Testimonials';
import VideoTestimonial from '../pages/VideoTestimonial';
import Contact from '../pages/Contact';
import MentorSection from '../pages/MentorSection';
import Carosal from '../pages/Carosal';
import FAQPage from '../pages/FAQPage';
import SuccessSection from '../pages/SuccessSection';


const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id='VSSER'><VSSER /></section>
        <section id="about"><About /></section>
        {/* <section id="course"><Course /></section> */}
        <section id="SuccessSection"><SuccessSection /></section>
        <section id="MentorSection"><MentorSection /></section>
        <section id="Testimonial"><Testimonial /></section>
        <section id=" VideoTestimonial">< VideoTestimonial/></section>
        <section id="Carosal"><Carosal /></section>
        <section id="FAQPage"><FAQPage /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
