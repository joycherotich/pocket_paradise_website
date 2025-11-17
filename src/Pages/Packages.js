// Packages.jsx (or Pack.jsx)
import React from 'react';
import PackageCard from '../components/PackageCard'; // adjust path as needed

const packagesData = [
  {
    id: 1,
    title: 'Mombasa Getaway',
    description: '3 Days • Beachfront Hotel',
    image:
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Maasai Mara Safari',
    description: '3 Days • Luxury Camps',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Diani Luxury Escape',
    description: '4 Days • 5-Star Resort',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Packages() {
  const handleViewPackage = (title) => {
    alert(`Viewing package: ${title}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">Top Holiday Packages</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {packagesData.map(({ id, title, description, image }) => (
          <PackageCard
            key={id}
            title={title}
            description={description}
            image={image}
            onView={() => handleViewPackage(title)}
          />
        ))}
      </div>
    </div>
  );
}
