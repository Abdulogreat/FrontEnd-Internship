import React from "react";

const testimonials = [
  { name: "Sarah M.", text: "TechFlow completely changed how my team collaborates!" },
  { name: "James T.", text: "The productivity boost was immediate. Highly recommend!" },
  { name: "Aisha K.", text: "I love how simple yet powerful TechFlow is." },
];

function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 border rounded-lg shadow bg-white dark:bg-gray-700">
            <p className="italic mb-4">"{t.text}"</p>
            <h3 className="font-semibold">- {t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
