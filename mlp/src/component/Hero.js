import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Boost Your Productivity with TechFlow 🚀</h1>
      <p className="max-w-xl text-lg mb-6">
        A modern SaaS tool designed to streamline your workflow and help you
        achieve more in less time.
      </p>
      <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
        Get Started
      </button>
    </section>
  );
}

export default Hero;
