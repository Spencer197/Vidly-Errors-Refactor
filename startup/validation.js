const Joi = require('joi');//From index.js

module.exports = function() {
  Joi.objectId = require('joi-objectid')(Joi);//From index.js
}