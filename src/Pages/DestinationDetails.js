import React from 'react';

export default function DestinationDetails({ destination }) {
  const sampleDestination = {
    name: "Maasai Mara",
    description:
      "Experience the iconic wildlife migration in Kenya's premier safari destination. Stay in luxury camps and enjoy guided tours.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=800&q=80",
    ],
    highlights: ["Safari drives", "Luxury camps", "Guided tours", "Big Five wildlife"],
    bestTimeToVisit: "July - October",
    duration: "3-5 days",
    priceRange: "$800 - $1500",
  };

  const dest = destination || sampleDestination;

  return (
    <div className="max-w-5xl mx-auto p-6 font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-6">{dest.name}</h1>
      <p className="text-gray-700 mb-8">{dest.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {dest.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${dest.name} view ${idx + 1}`}
            className="rounded-lg object-cover w-full h-48 md:h-64 shadow-md"
          />
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-3">Highlights</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {dest.highlights?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
        <div>
          <h3 className="font-semibold text-primary mb-1">Best Time to Visit</h3>
          <p>{dest.bestTimeToVisit}</p>
        </div>
        <div>
          <h3 className="font-semibold text-primary mb-1">Recommended Duration</h3>
          <p>{dest.duration}</p>
        </div>
        <div>
          <h3 className="font-semibold text-primary mb-1">Price Range</h3>
          <p>{dest.priceRange}</p>
        </div>
      </div>
    </div>
  );
}
