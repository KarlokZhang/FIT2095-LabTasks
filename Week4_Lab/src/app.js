require('dotenv').config();

const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

const router = require('./routes');

const errorHandler = require('./middleware/errorHandler');

const app = express();

const PORT = process.env.PORT || 3000;
const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(morganLog);
app.use(cors());
app.use(helmet());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use('/', router);
  
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('*', errorHandler);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
