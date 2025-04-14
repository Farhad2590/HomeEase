const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const { connectToDatabase } = require('./config/db');

const app = express();
const port = process.env.PORT || 1293;

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
app.use('/services', serviceRoutes);
app.use('/categories', categoryRoutes);


// Home route
app.get('/', (req, res) => {
  res.send('Hello from HomeEase Server...');
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));