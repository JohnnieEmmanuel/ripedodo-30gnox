const express = require('express');
const app = express();
const movieRoute = express.Router();
let MovieModel = require('../model/Movie');


movieRoute.route('/').get((req, res, next) => {
  MovieModel.find((error, movie) => {
    if (error) {
      return next(error)
    } else {
      res.json(movie)
      console.log('Movies retrieved!')
    }
  })
})


movieRoute.route('/create-user').post((req, res, next) => {
  MovieModel.create(req.body, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User created!')
    }
  })
});


movieRoute.route('/fetch-movie/:id').get((req, res, next) => {
  MovieModel.findById(req.params.id, (err, movie) => {
    if (err) {
      return next(err)
    } else {
      res.json(movie)
      console.log('Movie retrieved!')
    }
  })
})


movieRoute.route('/update-user/:id').put((req, res, next) => {
  MovieModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.json(user)
      console.log('User updated!')
    }
  })
})

movieRoute.route('/delete-user/:id').delete((req, res, next) => {
  MovieModel.findByIdAndRemove(req.params.id, (error, user) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: user
      })
      console.log('User deleted!')
    }
  })
})


movieRoute.route('/uploaddetails').post((req, res, next) => {
  MovieuploadModel.create(req.body, (err, movie) => {
    if (err) {
      return next(err)
    } else {
      res.json(movie)
      console.log('Movie created!')
    }
  })
});

module.exports = movieRoute;