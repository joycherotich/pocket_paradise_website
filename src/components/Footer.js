import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-14 mt-12 font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top section: main info + quick links + contact */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24 border-b border-white/20 pb-10">
          
          {/* Explore the World with Pocket of Paradise Travel */}
          <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 leading-snug">
              Explore the World with{" "}
              <span className="text-secondary">Pocket of Paradise Travel</span>
            </h3>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-10 text-white/90 mb-8">
              {/* Affordable Packages */}
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-2 0-3 1-3 3 0 1.5 1 2 2 2s2-.5 2-2M12 16v2m0-10v2m0 0c-2 0-3 1-3 3 0 1.5 1 2 2 2s2-.5 2-2"
                  />
                </svg>
                <span className="font-medium text-lg">Affordable Packages</span>
              </div>

              {/* Hotel Booking */}
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 10v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7m16 0v7a2 2 0 002 2h.5a2 2 0 002-2v-7m-8-6h.01M12 6v4"
                  />
                </svg>
                <span className="font-medium text-lg">Hotel Booking</span>
              </div>

              {/* Flight Transfer */}
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.5 19.5l19-7-19-7 7 19z"
                  />
                </svg>
                <span className="font-medium text-lg">Flight Transfer</span>
              </div>
            </div>

            {/* Contact details */}
            <p className="mb-2 font-semibold text-lg">
              Call:{" "}
              <a
                href="tel:0722787851"
                className="hover:text-secondary transition-colors duration-300"
              >
                0722 787 851
              </a>
            </p>
            <p className="mb-8 font-semibold text-lg">
              Email:{" "}
              <a
                href="mailto:pocketofparadisetravel@gmail.com"
                className="hover:text-secondary transition-colors duration-300"
              >
                pocketofparadisetravel@gmail.com
              </a>
            </p>

            {/* Tagline */}
            <p className="italic font-semibold text-white/80 text-lg">
              Your journey, your passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
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
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <p className="text-sm mb-3">📞 +254 722 787 851</p>
            <p className="text-sm">✉️ pocketofparadise@gmail.com</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Pocket of Paradise — All rights reserved
        </div>
      </div>
    </footer>
  );
}
