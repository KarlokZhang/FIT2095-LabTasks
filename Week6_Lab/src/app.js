require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes');

const app = express();

const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(morganLog);
app.use(cors());

app.use(express.json());
app.use('/', router);

module.exports = app;
