const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./db');

const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee')

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

const PORT = process.env.port || 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));