const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// DB connection from environment variables
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  ssl: { rejectUnauthorized: false },
});

// Create bookings table if not exists
const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      city VARCHAR(100) NOT NULL,
      pickup_location VARCHAR(255) NOT NULL,
      pickup_date DATE NOT NULL,
      dropoff_date DATE NOT NULL,
      pickup_time TIME NOT NULL,
      dropoff_time TIME NOT NULL,
      contact_number VARCHAR(20) NOT NULL,
      car_id VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log('✅ Bookings table is ready!');
  } catch (err) {
    console.error('❌ Failed to create bookings table:', err);
  }
};

// Single route for booking
app.post('/api/bookings', async (req, res) => {
  const {
    city,
    pickupLocation,
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
    contactNumber,
    carId,
  } = req.body;

  try {
    const query = `
      INSERT INTO bookings 
      (city, pickup_location, pickup_date, dropoff_date, pickup_time, dropoff_time, contact_number, car_id) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;
    const values = [city, pickupLocation, pickupDate, dropoffDate, pickupTime, dropoffTime, contactNumber, carId];

    const result = await pool.query(query, values);

    res.status(201).json({ message: 'Booking saved!', booking: result.rows[0] });
  } catch (err) {
    console.error('Error inserting booking:', err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// Initialize and start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await createTable();
  console.log(`🚀 Server running on port ${PORT}`);
});
