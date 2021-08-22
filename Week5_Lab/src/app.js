/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const router = require('./routes');
const mongoUtil = require('./utils/mongoUtil');

const app = express();

const PORT = process.env.PORT || 3001;
const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(morganLog);
app.use(cors());
app.use(helmet());
app.use(express.json());

mongoUtil.connectToDb();
app.use('/', router);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
