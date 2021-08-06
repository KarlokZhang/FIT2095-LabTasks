const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const router = require('../src/routes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);

app.listen(8080, () => {
  console.log('App listening at port 8080.')
});