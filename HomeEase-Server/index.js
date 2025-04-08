const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const { connectToDatabase } = require('./config/db');

const app = express();
const port = process.env.PORT || 9000;

// Middleware
const corsOptions = {
  origin: ['http://localhost:5173'],
  credential: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Connect to database
connectToDatabase().catch(console.error);

// Routes
app.use('/users', userRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Hello from HomeEase Server...');
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));