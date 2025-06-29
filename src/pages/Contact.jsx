/* src/components/Contact.jsx */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import Skeleton from '../components/Skeleton';

const MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.090698343399!2d77.02916631508269!3d28.62899798241706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f5c6f8a8f0f%3A0x9e3c5b3c5b3c5b3c!2sIndia%20Gate%2C%20New%20Delhi%2C%20Delhi%20110021!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: 'onBlur' });

  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(true);

  const onSubmit = async (data) => {
    setApiError('');
    try {
      await new Promise((r) => setTimeout(r, 800));
      reset();
    } catch {
      setApiError('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f0f1b]">
      <div className="w-full max-w-6xl h-[80vh] bg-gray-700 rounded animate-pulse" />
    </div>
  );
}

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0f0f1b] dark:text-white"
      aria-labelledby="contact-heading"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0f0f1b]" />
      <div aria-hidden="true" className="absolute -top-12 -left-24 h-96 w-96 rounded-full bg-[#0f0f1b] blur-3xl opacity-60 animate-pulse-slow" />
      <div aria-hidden="true" className="absolute -bottom-12 -right-24 h-96 w-96 rounded-full bg-[#0f0f1b] blur-3xl opacity-60 animate-pulse-slow animation-delay-4000" />

      <header className="mx-auto mb-16 max-w-3xl px-4 text-center">
        <h2 id="contact-heading" className="text-4xl font-bold md:text-5xl">
          Get&nbsp;In&nbsp;
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-300">
          We’re here to help and answer any question you might have.
        </p>
      </header>

      <div className="container mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <h3 className="mb-6 text-xl font-semibold">Send us a message</h3>

          <div role="status" aria-live="polite" className="sr-only">
            {isSubmitSuccessful && 'Message sent successfully'}
            {apiError && apiError}
          </div>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Please enter your name.' })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="form-input w-full rounded-lg px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Your name"
                required
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Please enter your email.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address.',
                  },
                })}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="form-input w-full rounded-lg px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="your.email@example.com"
                required
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: 'Please enter a message.' })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="form-input w-full resize-none rounded-lg px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Your message…"
                required
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 py-3 px-6 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitSuccessful ? 'Sent ✔︎' : 'Send Message'}
            </button>

            {apiError && (
              <p role="alert" className="mt-3 text-sm text-red-600">
                {apiError}
              </p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <h3 className="mb-6 text-xl font-semibold">Contact information</h3>

            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 p-3 dark:bg-cyan-900/30">
                  <FaMapMarkerAlt className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden />
                </div>
                <address className="not-italic">
                  <h4 className="font-medium">Our location</h4>
                  123 Tech Park, Sector 62<br />Noida 201309
                </address>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 p-3 dark:bg-cyan-900/30">
                  <FaPhoneAlt className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+911234567890" className="text-cyan-600 hover:underline dark:text-cyan-400">
                    +91&nbsp;12345&nbsp;67890
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 p-3 dark:bg-cyan-900/30">
                  <FaEnvelope className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:contact@example.com"
                    className="text-cyan-600 hover:underline dark:text-cyan-400"
                  >
                    contact@example.com
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 p-3 dark:bg-cyan-900/30">
                  <FaClock className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden />
                </div>
                <div>
                  <h4 className="font-medium">Working hours</h4>
                  Mon–Fri&nbsp;09:00-18:00<br />Sat&nbsp;10:00-16:00
                </div>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                title="Rocket Academy on Google Maps"
                src={MAP_URL}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute left-0 top-0 h-full w-full border-0 dark:grayscale dark:invert dark:opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
