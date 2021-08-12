require('dotenv').config();

const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const router = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;
const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(morganLog);
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
