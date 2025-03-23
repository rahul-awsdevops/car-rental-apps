'use client';

import Image from 'next/image';
import { useState } from 'react';
import BookingModal from './BookingModal';
import { toast } from 'react-hot-toast';

type CarProps = {
  id: string;
  name: string;
  pricePerDay: number;
  imageUrl: string;
  seats: number;
  fuel: string;
  mileage: string;
};

const CarCard = ({ id, name, pricePerDay, imageUrl, seats, fuel, mileage }: CarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingConfirmed = () => {
    toast.success(`Your booking for ${name} has been confirmed!`);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-gray-600 mt-1">${pricePerDay}/day</p>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
            <span>🪑 {seats} seats</span>
            <span>⛽ {fuel}</span>
            <span>📏 {mileage}</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 rounded transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <BookingModal
          car={{ id, name, pricePerDay, imageUrl, seats, fuel, mileage }}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleBookingConfirmed}
        />
      )}
    </>
  );
};

export default CarCard;
