import React from 'react';

const hotels = [
    {
      id: 1,
      name: "Fairmont Mount Kenya Safari Club",
      location: "Nanyuki, Kenya",
      rating: 5,
      price: "$400 / night",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Sarova Whitesands Beach Resort",
      location: "Mombasa, Kenya",
      rating: 4.5,
      price: "$300 / night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Amankila Resort",
      location: "Bali, Indonesia",
      rating: 5,
      price: "$550 / night",
      image:
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Bali Beachfront Villas",
      location: "Bali, Indonesia",
      rating: 4.8,
      price: "$350 / night",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Dubai Luxury Pool Resort",
      location: "Dubai, United Arab Emirates",
      rating: 5,
      price: "$450 / night",
      image:
        "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80",
    },
  ];
  

export default function Hotel() {
  return (
    <div className="max-w-7xl mx-auto p-6 font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Our Hotels & Stays
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hotels.map(({ id, name, location, rating, price, image }) => (
          <div
            key={id}
            className="rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            <img src={image} alt={name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-primary">{name}</h2>
              <p className="text-gray-600">{location}</p>
              <p className="mt-1">⭐ {rating} stars</p>
              <p className="mt-3 font-bold">{price}</p>
              <button className="mt-4 w-full py-2 bg-secondary text-black rounded-lg font-semibold hover:opacity-90 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
