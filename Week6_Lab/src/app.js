require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
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
    extended: true,
  }),
);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', router);

module.exports = app;
