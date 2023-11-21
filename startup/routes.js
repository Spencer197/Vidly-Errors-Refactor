//All this code was moved here from index.js
const express = require('express');//Loads express dependency
const genres = require('../routes/genres');//../ directs thread to other directories for routes.
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');//Loads error middleware

module.exports = function(app) {//(app) refers to index.js line 3 creation of app object
  app.use(express.json());
  app.use('/api/genres', genres);
  app.use('/api/customers', customers);
  app.use('/api/movies', movies);
  app.use('/api/rentals', rentals);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use(error);
}