const winston = require('winston');//Cut and pasted from index.js
require('winston-mongodb');//Cut and pasted for index.js
require('express-async-errors');//Cut and pasted for index.js

module.exports = function() {
  winston.handleExceptions(//This code block for setting up winston was moved here from index.js
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
  winston.add(winston.transports.File, { filename: 'logfile.log' });
  winston.add(winston.transports.MongoDB, { 
    db: 'mongodb://localhost/vidly',
    level: 'info'
  });  
}