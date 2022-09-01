const express = require('express');
const app = express();
const movieuploadRoute = express.Router();
let MovieuploadModel = require('../model/Movieupload');

let MovieModel = require('../model/Movie');


movieuploadRoute.route('/').get((req, res, next) => {
    MovieModel.find((error, movie) => {
      if (error) {
        return next(error)
      } else {
        res.json(movie)
        console.log('Movies retrieved!')
      }
    })
  })
  

movieuploadRoute.route('/uploaddetails').post((req, res, next) => {
  MovieuploadModel.create(req.body, (err, movieupload) => {
    if (err) {
      return next(err)
    } else {
      res.json(movieupload)
      console.log('details upload successful!')
    }
  })
});


// movieRoute.route('/create-user').post((req, res, next) => {
//     MovieModel.create(req.body, (err, user) => {
//       if (err) {
//         return next(err)
//       } else {
//         res.json(user)
//         console.log('User created!')
//       }
//     })
//   });


// movieRoute.route('/uploaddetails').post((req, res, next) => {
//   MovieuploadModel.create(req.body, (err, movie) => {
//     if (err) {
//       return next(err)
//     } else {
//       res.json(movie)
//       console.log('Movie created!')
//     }
//   })
// });

module.exports = movieuploadRoute;