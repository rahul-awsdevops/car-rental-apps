// app/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Dummy data for now (will replace with GraphQL later)
const cars = [
  {
    id: '1',
    name: 'Tesla Model 3',
    pricePerDay: 120,
    imageUrl: '/tesla-model-3.jpg',
    seats: 5,
    fuel: 'Electric',
  },
  {
    id: '2',
    name: 'BMW X5',
    pricePerDay: 150,
    imageUrl: '/bmw-x5.jpg',
    seats: 5,
    fuel: 'Petrol',
  },
  {
    id: '3',
    name: 'Audi A6',
    pricePerDay: 100,
    imageUrl: '/audi-a6.jpg',
    seats: 5,
    fuel: 'Diesel',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Find Your Perfect Ride</h1>
        <p className="text-gray-600 mb-6">Rent premium cars at affordable rates</p>
        <Link
          href="#cars"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
        >
          Explore Cars
        </Link>
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-gray-700">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={car.imageUrl}
                alt={car.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                <p className="text-gray-600 mt-1">${car.pricePerDay}/day</p>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <span>🪑 {car.seats} seats</span>
                  <span>⛽ {car.fuel}</span>
                </div>
                <Link
                  href={`/car/${car.id}`}
                  className="block mt-4 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
