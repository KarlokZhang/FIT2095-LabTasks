const express = require('express');

const bookRouter = require('./book');

const router = express.Router();

router.use('/', bookRouter);

module.exports = router;
