const express = require('express');
const bookRoute = require('./books');

const router = express.Router();

router.use('/', bookRoute);

module.exports = router;
