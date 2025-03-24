'use client';

import { useState } from 'react';

const SearchInput = ({
  onSearch,
}: {
  onSearch: (
    location: string,
    fromDate: string,
    untilDate: string,
    priceSort: string,
    manufacturer: string
  ) => void;
}) => {
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [untilDate, setUntilDate] = useState('');
  const [priceSort, setPriceSort] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(location, fromDate, untilDate, priceSort, manufacturer);
  };

  return (
    <div className="my-12">
      {/* Headline */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Unlock Your Next Adventure
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Choose from top-rated cars and hit the road with confidence.
      </p>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-lg rounded-xl p-6 flex flex-col md:flex-row flex-wrap items-center gap-4"
      >
        {/* Location */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-1">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select a City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
            <option value="San Francisco">San Francisco</option>
          </select>
        </div>

        {/* From Date */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-1">From Date & Time</label>
          <input
            type="datetime-local"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Until Date */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-1">Until Date & Time</label>
          <input
            type="datetime-local"
            value={untilDate}
            onChange={(e) => setUntilDate(e.target.value)}
            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Sort by Price */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-1">Sort by Price</label>
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Default</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* Manufacturer */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-1">Manufacturer</label>
          <select
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">All</option>
            <option value="Genesis">Genesis</option>
            <option value="Lexus">Lexus</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Tesla">Tesla</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-6 py-2 rounded-lg transition shadow"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
