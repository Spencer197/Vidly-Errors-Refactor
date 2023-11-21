const config = require('config');//Cut and pasted from index.js

module.exports = function() {
  if (!config.get('jwtPrivateKey')) {//Cut and pasted from index.js
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');//Throw exception, cache it, log it, & terminate process
  }
}
//Best Practice: Throw Error object instead of a string so that stacktrace is available.