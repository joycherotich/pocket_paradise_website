import React, { useState, useEffect } from "react";

const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1496196614460-48988a57fccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbGRsaWZlfGVufDB8fDB8fHww", 
      // Beautiful beach at sunset
      title: "Escape to pristine beaches",
      subtitle: "Handpicked beach holidays & luxury resorts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww", 
      // Ocean waves crashing on rocks
      title: "Epic Safaris in Kenya",
      subtitle: "Witness the great migration & stay in luxury camps",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1669725687150-15c603ac6a73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D", 
      // Lion closeup wildlife
      title: "Relax by the ocean",
      subtitle: "Breathe in the serenity and beauty of the sea",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661843615544-b2c973491c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D", 
      // Tropical Bali-style beach with palm trees
      title: "Discover tropical paradises",
      subtitle: "Experience exotic beaches and vibrant cultures",
    },
  ];
  
  
  
export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden font-[Poppins]">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
              <div className="text-white max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
                  {s.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-secondary font-semibold">
                  {s.subtitle}
                </p>

                <div className="mt-6">
                  <a
                    href="#packages"
                    className="inline-block px-6 py-3 bg-secondary text-black rounded-lg font-bold mr-3"
                  >
                    Explore Packages
                  </a>
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 border border-white rounded-lg text-white"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-10 h-2 rounded-full ${
              i === index ? "bg-secondary" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>

      {/* Search Overlay Card */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 w-[92%] max-w-5xl z-30 font-[Poppins]">
        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 p-4 md:p-6">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            {/* Destination */}
            <div>
              <label className="block text-xs text-gray-500">Destination</label>
              <input
                type="text"
                placeholder="Where to? (e.g. Diani)"
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs text-gray-500">Category</label>
              <select className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none">
                <option>All</option>
                <option>Beach</option>
                <option>Safari</option>
                <option>International</option>
              </select>
            </div>

            {/* Dates */}
            <div>
              <label className="block text-xs text-gray-500">Dates</label>
              <input
                type="date"
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-white font-bold"
              >
                Search Trips
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
