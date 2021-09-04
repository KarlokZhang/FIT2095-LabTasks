require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();

const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(morganLog);
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use('/', router);

module.exports = app;
