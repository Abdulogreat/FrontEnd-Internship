import React from "react";

const plans = [
  { name: "Basic", price: "$9/mo", features: ["1 Project", "Basic Support", "Cloud Storage"] },
  { name: "Pro", price: "$29/mo", features: ["10 Projects", "Priority Support", "Advanced Analytics"] },
  { name: "Enterprise", price: "$99/mo", features: ["Unlimited Projects", "Dedicated Manager", "Custom Features"] },
];

function Pricing() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-semibold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((f, j) => (
                <li key={j}>✅ {f}</li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
