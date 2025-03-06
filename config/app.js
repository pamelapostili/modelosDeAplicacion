const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/articles', require('./routes/articleRoutes'));
app.use('/api/persons', require('./routes/personRoutes'));
app.use('/api/locations', require('./routes/locationRoutes'));
app.use('/api/assignments', require('./routes/assignmentRoutes'));
app.use('/api/inventories', require('./routes/inventoryRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));