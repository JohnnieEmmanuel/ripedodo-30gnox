const express = require('express');
const app = express();
const movieRoute = express.Router();
let MovieModel = require('../model/Movie');


movieRoute.route('/').get((req, res, next) => {
  MovieModel.find((error, user) => {
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('Users retrieved!')
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


movieRoute.route('/fetch-user/:id').get((req, res, next) => {
  MovieModel.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User retrieved!')
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

module.exports = movieRoute;