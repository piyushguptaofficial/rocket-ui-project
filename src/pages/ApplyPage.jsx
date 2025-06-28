import React from "react";
import { Link } from "react-router-dom";
import FadeInItem from "../components/FadeInItem";
import Button from "../components/Button";

const ApplyPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center px-4 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] relative">
      
      {/* Background texture image */}
      <div className="absolute inset-0 bg-[url('/Applybg.jpeg')] opacity-10 pointer-events-none z-0" />

      {/* Back to Home button */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md shadow-lg transition duration-300"
      >
        ← Back to Home
      </Link>

      <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-teal-500/30 rounded-2xl p-8 sm:p-10 text-slate-100 shadow-2xl shadow-black/40">
        
        {/* Header */}
        <FadeInItem index={0} className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 drop-shadow-lg">
            Ready to Launch?
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium">
            Apply for Rocket Academy's 6-week psychology bootcamp
          </p>
        </FadeInItem>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { type: "text", placeholder: "Full Name" },
              { type: "email", placeholder: "Email Address" },
              { type: "tel", placeholder: "Phone Number" },
              { type: "text", placeholder: "City, State" },
              { type: "number", placeholder: "Your Age", min: 16 },
            ].map((field, i) => (
              <FadeInItem index={i + 1} key={i}>
                <input
                  {...field}
                  required
                  className="w-full px-4 py-2 rounded-md bg-slate-800 border border-teal-600/40 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-inner shadow-slate-900/30"
                />
              </FadeInItem>
            ))}

            <FadeInItem index={6}>
              <select
                required
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-teal-600/40 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-inner shadow-slate-900/30"
              >
                <option value="">Select Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Non-binary</option>
              </select>
            </FadeInItem>
          </div>

          {/* CTA Button */}
          <FadeInItem index={7} className="text-center pt-6">
            <Button
              button_text="Submit Application"
              className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-teal-400 to-indigo-500 hover:from-indigo-500 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-indigo-700/30"
            />
            <p className="mt-4 text-sm text-slate-400 italic">
              Cohort starts July 28 · No experience needed
            </p>
          </FadeInItem>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
