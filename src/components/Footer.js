import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 mt-12 font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 border-b border-white/20 pb-8">
          
          <div className="max-w-sm">
            <h2 className="text-3xl font-extrabold">
              Pocket <span className="text-secondary">of Paradise</span>
            </h2>
            <p className="mt-4 text-sm text-white/90 leading-relaxed">
              We create unforgettable holidays across Kenya and beyond. Custom packages, trusted partners.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/packages"
                  className="hover:text-secondary transition-colors duration-300"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="/destinations"
                  className="hover:text-secondary transition-colors duration-300"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-secondary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p className="text-sm mb-2">📞 +254 700 000 000</p>
            <p className="text-sm">✉️ hello@pocketofparadise.co.ke</p>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Pocket of Paradise — All rights reserved
        </div>
      </div>
    </footer>
  );
}
