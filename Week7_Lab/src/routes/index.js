const express = require('express');
const movieRoute = require('./movies');

const router = express.Router();

router.use('/movies', movieRoute);

module.exports = router;
