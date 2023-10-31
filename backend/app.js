// Import necessary modules and models
const express = require('express');
const mongoose = require('mongoose');
const Art = require('./models/art'); // Import the Art model

const app = express();
const port = 3000;

const dbURL = 'mongodb+srv://user:user123@gallery.6qcawy6.mongodb.net/gallery';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
  });

// Define a route to get all art entries
app.get('/art', (req, res) => {
  Art.find({})
    .then((artEntries) => {
      res.json(artEntries);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error retrieving art entries' });
    });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
