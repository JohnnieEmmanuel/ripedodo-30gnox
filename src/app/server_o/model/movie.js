const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Movie = new Schema({
  title: {
    type: String
  },
  awsUrl: {
    type: String
  },
  genre: {
    type: String
  }
}, {
  collection: 'movies'
})

module.exports = mongoose.model('Movie', Movie)