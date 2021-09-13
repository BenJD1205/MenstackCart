require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();
const app = express();
app.use(express.json());

const port = process.env.port || 5000;

app.use('/api/products',productRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})