const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Movieupload = new Schema({
  movietitle: {
    type: String
  },
  movieurl: {
    type: String
   },
   movieposter:{
    type: String
   },
   movieplot:{
    type: String
   },
   movieidmbid:{
    type: String
   },
   movieruntime:{
    type: String
   },
   movieposter:{
    type: String
   },
   movieresponse:{
    type: String
   },
   movietype:{
    type: String
   },
   moviegenre:{
    type: String
   }
  
   //,
  // genre: {
  //   type: String
  // }
}, {
  collection: 'movies'
})

module.exports = mongoose.model('Movieupload', Movieupload)