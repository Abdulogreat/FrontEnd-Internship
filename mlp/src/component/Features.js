import React from "react";

const features = [
  { title: "Fast Performance", desc: "Experience blazing fast load times.", icon: "⚡" },
  { title: "Cloud Sync", desc: "Access your data anywhere, anytime.", icon: "☁️" },
  { title: "Secure", desc: "Top-notch security for peace of mind.", icon: "🔒" },
];

function Features() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
