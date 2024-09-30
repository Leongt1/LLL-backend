// app.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./data/db');
const userRoutes = require('./routes/user.route');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('User Authentication API');
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
