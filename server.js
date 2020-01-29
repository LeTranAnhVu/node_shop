const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(bodyParser.json());


// connect database
require("./src/database/connection");
//associate
require("./src/associates");

// routers
app.use(require('./routes'));




const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is starting on port 5000'));

