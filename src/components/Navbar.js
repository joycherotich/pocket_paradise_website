import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/travel.png';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img
                src={logo}
                alt="Pocket of Paradise Logo"
                className="w-36 h-22 rounded-lg object-contain"
            />
            <div className="hidden sm:block">
                <div className="text-xl font-bold text-primary">
                Pocket <span className="text-secondary">of Paradise</span>
                </div>
                <div className="text-xs text-gray-500">Luxury travel & custom packages</div>
            </div>
            </Link>

          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 font-medium text-primary">
            <Link to="/packages" className="hover:text-secondary transition">
              Packages
            </Link>
            <Link to="/destinationdetails" className="hover:text-secondary transition">
              Destinations
            </Link>
            <Link to="/safari" className="hover:text-secondary transition">
              Safaris
            </Link>
            <Link to="/hotel" className="hover:text-secondary transition">
              Hotels
            </Link>
            <Link to="/contact" className="hover:text-secondary transition">
              Contact
            </Link>
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+254700000000" className="text-sm text-gray-600">
              +254 710711161
            </a>
            <Link
              to="/login"
            //   className="px-4 py-2 border rounded-lg text-sm font-semibold text-primary hover:bg-secondary hover:text-white transition"
            >
              {/* Login */}
            </Link>
            <Link
              to="/booking"
              className="px-4 py-2 rounded-lg bg-secondary text-black font-bold hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
            >
              {open ? (
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-white border-t">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link to="/packages" className="block text-primary font-medium">
              Packages
            </Link>
            <Link to="/destinations" className="block text-primary font-medium">
              Destinations
            </Link>
            <Link to="/safari" className="block text-primary font-medium">
              Safaris
            </Link>
            <Link to="/hotel" className="block text-primary font-medium">
              Hotels
            </Link>
            <Link to="/contact" className="block text-primary font-medium">
              Contact
            </Link>
            <div className="flex gap-3 pt-2">
              <Link
                to="/login"
                className="flex-1 text-center py-2 border rounded hover:bg-gray-100 transition"
              >
                Login
              </Link>
              <Link
                to="/book"
                className="flex-1 text-center py-2 bg-secondary rounded font-bold hover:opacity-90 transition"
              >
                Book
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
