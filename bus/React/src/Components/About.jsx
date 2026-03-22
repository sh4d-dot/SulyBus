import React from "react";

function About() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-orange-500">🚌 Sulaymaniyah Bus Stop App</h1>

        <p className="mb-6 text-gray-700">
          The Sulaymaniyah Bus Stop app helps people in Sulaymaniyah find bus stops, view routes, and plan their trips with ease. 
          It’s designed to make daily commuting simpler, especially for students and workers.
        </p>

        <h2 className="mb-3 text-lg font-semibold">What You Can Do</h2>
        <ul className="mb-6 list-inside list-disc text-gray-700">
          <li className="mb-2">See bus stops and their locations.</li>
          <li className="mb-2">Check which routes pass through each stop.</li>
          <li className="mb-2">Save your favorite stops and routes.</li>
        </ul>

        <h2 className="mb-3 text-lg font-semibold">Contact & Support</h2>
        <p className="mb-2 text-gray-700">
          If you have any questions or suggestions, please reach out:
        </p>
        <p className="text-md font-semibold text-orange-500">
          📧 <span className="font-normal">sulybusstop.@gmail.com</span>
        </p>

        <p className="mt-6 text-sm text-gray-500">
          * This app is still under development and will be improved based on your feedback.
        </p>
      </div>
    </div>
  );
}

export default About;
