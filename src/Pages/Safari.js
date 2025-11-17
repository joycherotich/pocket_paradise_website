import React from 'react';

const safariPackages = [
  {
    id: 1,
    title: "Maasai Mara Safari",
    description: "3 days luxury safari with Big Five wildlife",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    price: "$1200",
  },
  {
    id: 2,
    title: "Amboseli Adventure",
    description: "2 days safari with views of Mount Kilimanjaro",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    price: "$900",
  },
];

export default function Safari() {
  return (
    <div className="max-w-7xl mx-auto p-6 font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Explore Our Safari Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {safariPackages.map(({ id, title, description, image, price }) => (
          <div key={id} className="rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-primary">{title}</h2>
              <p className="text-gray-600 mt-2">{description}</p>
              <p className="mt-3 font-bold">{price}</p>
              <button className="mt-4 w-full py-2 bg-secondary text-black rounded-lg font-semibold hover:opacity-90 transition">
                Book Safari
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
