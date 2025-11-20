// Packages.jsx
import React from "react";
import PackageCard from "../components/PackageCard"; // adjust path as needed

const packagesData = [
  {
    id: 1,
    title: "Fly to Kuala Lumpur (From 100,000 KES)",
    description:
      "4 nights accommodation • Bed & breakfast • 5hr city tour + 2-way cable car • Port Dickson tour",
    image:
      "https://images.unsplash.com/photo-1591702090989-e96626200e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGt1YWxhJTIwbHVtcHVyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "10 Days Thailand Experience",
    description:
      "3 nights Bangkok • Pattaya • Phuket • Return flights included",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Fly to Bali (From 145,000 KES)",
    description:
      "4 nights luxury stay • 4–5 star hotel • Bed & breakfast • Return flights • Airport transfers",
    image:
      "https://images.unsplash.com/photo-1564981447395-903d78d49a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbGklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Rhino River Camp (1 Nov – 19 Dec)",
    description:
      "From 23,560 KES pps • Full board meals • Soft drinks + house beers",
    image:
      "https://images.unsplash.com/photo-1759353276850-53c58a67c418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJoaW5vJTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Discover Diani",
    description:
      "Fly to Mombasa • From 72,000 KES • Beach resorts • Perfect relaxation",
    image:
      "https://images.unsplash.com/photo-1706012955757-6c2048c32668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbml8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Mombasa Getaway",
    description: "3 Days • Beachfront Hotel",
    image:
      "https://images.unsplash.com/photo-1547291195-54d2471ae3b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbGklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    title: "Maasai Mara Safari",
    description: "3 Days • Luxury Camps",
    image:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFhc2FpJTIwbWFyYSUyMG5hdGlvbmFsJTIwcmVzZXJ2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    title: "Diani Luxury Escape",
    description: "4 Days • 5-Star Resort",
    image:
      "https://media.istockphoto.com/id/155264138/photo/chairs-on-swimming-pool-border.webp?a=1&b=1&s=612x612&w=0&k=20&c=Iy8Jek8uvjd3NhRt2BX_qhGC2RcatS25Af-aOB9t8IU=",
  },
];

export default function Packages() {
  const handleViewPackage = (title) => {
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">
        Top Holiday Packages
      </h1>

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
