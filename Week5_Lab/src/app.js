/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const dayjs = require('dayjs');

const router = require('./routes');
const mongoUtil = require('./utils/mongoUtil');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
dayjs().format();

const PORT = process.env.PORT || 3001;
const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(morganLog);
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

mongoUtil.connectToDb();
app.use('/', router);

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('*', errorHandler);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
