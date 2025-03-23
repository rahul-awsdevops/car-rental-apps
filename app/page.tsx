'use client';

import NavBar from '@/components/NavBar';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/cars';
import Image from 'next/image';
import SearchInput from '@/components/SearchInput';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Block */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Find Your Perfect Ride</h1>
            <p className="text-lg text-gray-700 mb-8">Rent premium cars at affordable rates and drive with style.</p>
            <a
              href="#cars"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
            >
              Explore Cars
            </a>
          </div>

          {/* Image Block */}
          <div className="flex-1 relative w-full h-80 md:h-96">
            <Image
              src="/hero-car.jpg"
              alt="Luxury Car"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Search Filter Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <SearchInput onSearch={() => {}} />
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-gray-700">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard 
              key={car.id} 
              id={car.id} 
              name={car.name} 
              pricePerDay={car.pricePerDay} 
              imageUrl={car.imageUrl} 
              seats={car.seats} 
              fuel={car.fuel} 
              mileage={car.mileage} 
            />
          ))}
        </div>
      </section>
    </main>
  );
}
