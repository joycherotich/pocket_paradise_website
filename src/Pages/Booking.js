import React, { useState } from 'react';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    guests: 1,
    date: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your booking request for ${form.destination} is received.`);
    // Here you can add actual submission logic (API call, etc)
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 font-[Poppins]">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Book Your Trip</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+254 700 000 000"
          />
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block text-gray-700 font-semibold mb-1">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Diani, Maasai Mara, etc."
          />
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block text-gray-700 font-semibold mb-1">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min="1"
            max="20"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-gray-700 font-semibold mb-1">Travel Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="specialRequests" className="block text-gray-700 font-semibold mb-1">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={form.specialRequests}
            onChange={handleChange}
            rows="4"
            placeholder="Anything we should know?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}
