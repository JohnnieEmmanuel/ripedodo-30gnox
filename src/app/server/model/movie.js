const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Movie = new Schema({
  movietitle: {
    type: String
  },
  movieurl: {
    type: String
   }
   //,
  // genre: {
  //   type: String
  // }
}, {
  collection: 'movies'
})

module.exports = mongoose.model('Movie', Movie)