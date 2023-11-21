const winston = require('winston');//Load dependencies
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/vidly')
    .then(() => winston.info('Connected to MongoDB...'));//Info message from winston
}