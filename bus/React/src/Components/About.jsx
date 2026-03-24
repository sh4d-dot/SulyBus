import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import busLogo from "../icons/sulybus.png";

function About() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl sm:p-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={busLogo} alt="Sulaymaniyah Bus Stop Logo" className="w-32 h-32 object-contain" />
        </div>

        {/* App Name */}
        <h1 className="mb-6 text-2xl sm:text-3xl font-bold text-orange-500 text-center flex items-center justify-center gap-2">
           Sulaymaniyah Bus Stop
        </h1>

        {/* Description */}
        <p className="mb-6 text-gray-700 text-center sm:text-left leading-relaxed sm:leading-7">
          The Sulaymaniyah Bus Stop app helps people find bus stops, view routes, and plan trips with ease. 
          Designed for students and workers, it makes daily commuting simpler.
        </p>

        {/* Features */}
        <h2 className="mb-4 text-lg sm:text-xl font-semibold text-gray-800">What You Can Do</h2>
        <ul className="mb-8 list-inside list-disc space-y-2 text-gray-700 text-sm sm:text-base">
          <li>See bus stops and their locations.</li>
          <li>Check which routes pass through each stop.</li>
          <li>Save your favorite stops and routes for quick access.</li>
        </ul>

        {/* Contact */}
        <h2 className="mb-4 text-lg sm:text-xl font-semibold text-gray-800">Contact & Support</h2>
        <p className="mb-6 text-gray-700">
          Have questions or suggestions? Reach out via email:
        </p>
        <div className="flex justify-center mb-6 space-x-4">
          <a href="mailto:sulybusstop@gmail.com" className="text-orange-500 text-2xl hover:text-orange-600 transition-colors">
            <FaEnvelope />
          </a>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors text-xl">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors text-xl">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors text-xl">
            <FaInstagram />
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-sm text-gray-500 italic">
          * App is under development and will improve with your feedback.
        </p>

      </div>
    </div>
  );
}

export default About;