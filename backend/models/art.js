const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  title: String,
  artist: String,
});

const Art = mongoose.model('art', artSchema);

module.exports = Art;
