// PackageCard.jsx
import React from 'react';

export default function PackageCard({ title, description, image, onView }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition cursor-pointer">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button
          onClick={onView}
          className="mt-4 w-full py-2 rounded-lg bg-primary text-white font-semibold hover:bg-secondary hover:text-black transition"
        >
          View Package
        </button>
      </div>
    </div>
  );
}
