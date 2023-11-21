const winston = require('winston');//Load winston for logging port connection below.
const express = require('express');
const app = express();

require('./startup/logging');//Loads startup/logging first to log any startup error.
require('./startup/routes')(app);//Loads startup/routes module, returns function to call app obj. 
require('./startup/db')();//Load startup/db and call the returned function ().
require('./startup/config')();//Load startup/config and call returned function ().
require('./startup/validation')();//Load startup/validation and call exported function ().

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));