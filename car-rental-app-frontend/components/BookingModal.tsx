'use client';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

type BookingModalProps = {
  car: {
    id: string;
    name: string;
    pricePerDay: number;
    imageUrl: string;
    seats: number;
    fuel: string;
    mileage: string;
  };
  onClose: () => void;
  onConfirm: () => void; 
};

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
const cityLocations: { [key: string]: string[] } = {
  'New York': ['Times Square', 'Central Park', 'Brooklyn Bridge', 'Empire State Building'],
  'Los Angeles': ['LAX Airport', 'Santa Monica Pier', 'Hollywood Blvd', 'Griffith Observatory'],
  'Chicago': ['Millennium Park', 'The Art Institute', 'Navy Pier', 'O\'Hare Airport'],
  'Houston': ['Downtown Houston', 'Space Center', 'Galleria Mall', 'Museum District'],
  'Miami': ['South Beach', 'Wynwood Walls', 'Downtown Miami', 'Miami International Airport'],
};

const BookingModal = ({ car, onClose, onConfirm }: BookingModalProps) => {

  const [formData, setFormData] = useState({
    pickupLocation: '',
    city: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '',
    dropoffTime: '',
    contactNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// 🔴 🔴 THIS IS THE PLACE TO UPDATE handleSubmit 🔴 🔴
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const payload = {
      ...formData,
      carId: car.id, // <-- Include the car ID for backend
    };

      // ✅ API call now goes via NGINX reverse proxy
      const response = await axios.post('/api/bookings', payload);

      if (response.status === 201) {
        alert('Booking Confirmed & Saved!');
        onConfirm();  // <-- Call the onConfirm handler passed from CarCard
        onClose();
      }
      
  } catch (error) {
    console.error('Booking failed', error);
    alert('Something went wrong while booking.');
  }
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative flex gap-6 shadow-2xl">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-700 hover:text-black">
          <FaTimes size={20} />
        </button>

        {/* Left Side - Car Details */}
        <div className="w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-black">Rent a Car Now!</h2>

          <Image src={car.imageUrl} alt={car.name} width={400} height={300} className="rounded" />
          <h3 className="text-xl font-bold text-black">{car.name}</h3>

          <p className="text-gray-700 font-semibold">Price: ${car.pricePerDay}/day</p>
          <p className="text-gray-700 font-semibold">Seats: {car.seats}</p>
          <p className="text-gray-700 font-semibold">Fuel: {car.fuel}</p>
          <p className="text-gray-700 font-semibold">Mileage: {car.mileage}</p>
        </div>

        {/* Right Side - Booking Form */}
        <div className="w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* City Selection */}
<div className="flex flex-col space-y-1">
  <label className="font-semibold text-gray-800">City</label>
  <select
    name="city"
    value={formData.city}
    onChange={handleChange}
    className="select select-bordered border-2 border-gray-400 focus:border-blue-600 font-semibold placeholder-gray-600 text-black"
    required
  >
    <option value="">Select City</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>

{/* Pickup Location */}
<div className="flex flex-col space-y-1">
  <label className="font-semibold text-gray-800">Pickup Location</label>
  <select
    name="pickupLocation"
    value={formData.pickupLocation}
    onChange={handleChange}
    disabled={!formData.city}
    className="select select-bordered border-2 border-gray-400 focus:border-blue-600 font-semibold placeholder-gray-600 text-black"
    required
  >
    <option value="">Select Pickup Location</option>
    {formData.city &&
      cityLocations[formData.city]?.map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
  </select>
</div>

            <div className="flex gap-4">
              <div className="flex flex-col space-y-1 w-1/2">
                <label className="font-semibold text-gray-800">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="input input-bordered border-2 border-gray-400 focus:border-blue-600 font-semibold placeholder-gray-600 text-black"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1 w-1/2">
                <label className="font-semibold text-gray-800">Drop-off Date</label>
                <input
                  type="date"
                  name="dropoffDate"
                  value={formData.dropoffDate}
                  onChange={handleChange}
                  className="input input-bordered border-2 border-gray-400 focus:border-blue-600 font-semibold placeholder-gray-600 text-black"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col space-y-1 w-1/2">
                <label className="font-semibold text-gray-800">Pickup Time</label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="input input-bordered border-2 border-gray-400 focus:border-blue-600 font-semibold placeholder-gray-600 text-black"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1 w-1/2">
                <label className="font-semibold text-gray-800">Drop-off Time</label>
                <input
                  type="time"
                  name="dropoffTime"
                  value={formData.dropoffTime}
                  onChange={handleChange}
                  className="input input-bordered border-2 border-gray-400 focus:border-blue-600 font-semibold placeholder-gray-600 text-black"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-gray-800">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="e.g., +1 123 456 7890"
                className="input input-bordered border-2 border-gray-400 focus:border-blue-600 font-semibold placeholder-gray-600 text-black"
                required
              />
            </div>

            <button
  type="submit"
  className="btn w-full font-bold text-white bg-blue-600 hover:bg-blue-900 py-3 rounded-md"
>
  Confirm Booking
</button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
