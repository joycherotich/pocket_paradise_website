import React, { useState } from 'react';

const categories = ['All', 'Beach', 'Safari', 'International'];

export default function SearchBox({ onSearch }) {
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('All');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ destination, category, date });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 p-4 md:p-6 max-w-5xl mx-auto"
    >
      {/* Destination */}
      <div>
        <label className="block text-xs text-gray-500">Destination</label>
        <input
          type="text"
          placeholder="Where to? (e.g. Diani)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-xs text-gray-500">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="block text-xs text-gray-500">Dates</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
      </div>

      {/* Search Button */}
      <div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-secondary hover:text-black transition"
        >
          Search Trips
        </button>
      </div>
    </form>
  );
}
