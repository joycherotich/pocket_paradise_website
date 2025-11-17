import React from 'react';
import { Navbar } from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
    return (
      <div className="min-h-screen bg-white font-[Poppins]">
        {/* <Navbar /> */}
        <HeroSlider />
  
        {/* following sections (offers, destinations etc.) should be added as separate components */}
  
        <section id="packages" className="max-w-7xl mx-auto px-6 py-16 font-[Poppins]">
          <h2 className="text-3xl font-bold text-primary mb-6">Top Holiday Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* sample card */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=80" alt="package" className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">Diani Luxury Escape</h3>
                <p className="text-gray-600 mt-1">4 Days • Beachfront Resort</p>
                <div className="mt-4">
                  <a href="/packages/diani" className="inline-block w-full text-center py-2 bg-primary text-white rounded-lg font-semibold">View Package</a>
                </div>
              </div>
            </article>
  
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" alt="package" className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">Maasai Mara Safari</h3>
                <p className="text-gray-600 mt-1">3 Days • Luxury Camp</p>
                <div className="mt-4">
                  <a href="/packages/maasai-mara" className="inline-block w-full text-center py-2 bg-primary text-white rounded-lg font-semibold">View Package</a>
                </div>
              </div>
            </article>
  
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="package" className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">Nairobi City Break</h3>
                <p className="text-gray-600 mt-1">2 Days • City Hotel</p>
                <div className="mt-4">
                  <a href="/packages/nairobi" className="inline-block w-full text-center py-2 bg-primary text-white rounded-lg font-semibold">View Package</a>
                </div>
              </div>
            </article>
          </div>
        </section>
  

      </div>
    );
  }