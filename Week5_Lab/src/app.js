require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const router = require('./router');
const logger = console;

const app = express();

const PORT = process.env.PORT || 3001;
const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(morganLog);
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  logger.log(`server listening on port ${PORT}`);
});
