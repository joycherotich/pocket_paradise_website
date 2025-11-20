import React from 'react';
import { Navbar } from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
    return (
      <div className="min-h-screen bg-white font-[Poppins]">
        {/* <Navbar /> */}
        <HeroSlider />
  
        {/* following sections (offers, destinations etc.) should be added as separate components */}

        {/* HOT DEALS SECTION */}
<section className="py-16 bg-white font-[Poppins]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-center text-4xl font-bold text-primary mb-2">
      🔥 HOT 2025 DEALS
    </h2>
    <p className="text-center text-gray-600 mb-10">
      Limited-time travel offers — Book now!
    </p>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      {/* DUBAI */}
      <div className="relative rounded-xl overflow-hidden shadow-lg group">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
          alt="Dubai"
  className="h-60 w-full object-cover brush-mask group-hover:scale-105 transition"
        />

        {/* PRICE BADGE */}
        <div className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
          From KES 139,000
          <div className="text-xs font-medium">8–15 Dec</div>
        </div>

        {/* TITLE */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg font-bold">
          DUBAI
        </div>
      </div>

      {/* CAPE TOWN */}
      <div className="relative rounded-xl overflow-hidden shadow-lg group">
        <img
          src="https://plus.unsplash.com/premium_photo-1697730039730-102912a08e70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FwZXRvd258ZW58MHx8MHx8fDA%3D"
          alt="Cape Town"
  className="h-60 w-full object-cover brush-mask group-hover:scale-105 transition"
        />

        <div className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
          From KES 120,000
          <div className="text-xs font-medium">8–15 Dec</div>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg font-bold">
          CAPE TOWN
        </div>
      </div>

      {/* RHINO RIVER CAMP */}
      <div className="relative rounded-xl overflow-hidden shadow-lg group">
        <img
          src="https://images.unsplash.com/photo-1759353276850-53c58a67c418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJoaW5vJTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Rhino River Camp"
  className="h-60 w-full object-cover brush-mask group-hover:scale-105 transition"
        />

        <div className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
          From KES 23,560
          <div className="text-xs font-medium">1 Nov – 19 Dec</div>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg font-bold">
          RHINO RIVER CAMP
        </div>
      </div>

      {/* EXTRA DEAL — Just to complete layout (we can replace later) */}
      <div className="relative rounded-xl overflow-hidden shadow-lg group">
        <img
          src="https://images.unsplash.com/photo-1667935837291-1dc178866251?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlhbml8ZW58MHx8MHx8fDA%3D"
          alt="Diani"
  className="h-60 w-full object-cover brush-mask group-hover:scale-105 transition"
        />
        <div className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
          From KES 72,000
          <div className="text-xs font-medium">Anytime</div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg font-bold">
          DIANI
        </div>
      </div>

    </div>
  </div>
</section>

  
        <section id="packages" className="max-w-7xl mx-auto px-6 py-16 font-[Poppins]">
          <h2 className="text-3xl font-bold text-primary mb-6">Top Holiday Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* sample card */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img src="https://media.istockphoto.com/id/1329567470/photo/nature.webp?a=1&b=1&s=612x612&w=0&k=20&c=6jEDqikxKEJz1PCMu6bieegvCO_j2ghqmD76VxQNFWg=" alt="package" className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">Diani Luxury Escape</h3>
                <p className="text-gray-600 mt-1">4 Days • Beachfront Resort</p>
                <div className="mt-4">
                  <a href="/packages/diani" className="inline-block w-full text-center py-2 bg-primary text-white rounded-lg font-semibold">View Package</a>
                </div>
              </div>
            </article>
  
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img src="https://media.istockphoto.com/id/1225495810/photo/leopard-perched-on-a-tree-out-in-the-open-with-a-safari-tour-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=vMuWhygV7TGifRIUQdTwuBVbZdJf-aCc4yPsuZH9Bi4=" alt="package" className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">Maasai Mara Safari</h3>
                <p className="text-gray-600 mt-1">3 Days • Luxury Camp</p>
                <div className="mt-4">
                  <a href="/packages/maasai-mara" className="inline-block w-full text-center py-2 bg-primary text-white rounded-lg font-semibold">View Package</a>
                </div>
              </div>
            </article>
  
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img src="https://images.unsplash.com/photo-1626359508930-488d5f1239b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcGV0b3duJTIwQ2l0eSUyMEJyZWFrfGVufDB8fDB8fHww" alt="package" className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">Capetown</h3>
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