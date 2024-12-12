const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

// Database Sync and Server Start
sequelize.sync({ force: false }).then(() => {
  console.log('Database connected!');
  app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT || 3000}`);
  });
}).catch((error) => {
  console.error('Database connection error:', error);
});

// # With nodemon (development mode)
// npx nodemon server.js

// # Or with node
// node server.js