const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const cors =require('cors');
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/clientDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a schema and model
const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    location: String,
    address: String
});

const Client = mongoose.model('Client', clientSchema);

// API endpoint to get all clients
app.get('/clients', (req, res) => {
    Client.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
