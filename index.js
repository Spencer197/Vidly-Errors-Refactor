const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging');//Loads startup/logging first to log any startup error.
require('./startup/routes')(app);//Loads startup/routes module, returns function to call app obj. 
require('./startup/db')();//Load startup/db and call the returned function ().
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));