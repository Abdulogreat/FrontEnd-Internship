import React, { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">TechFlow</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Sections */}
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-200 dark:bg-gray-700">
        © 2025 TechFlow. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
