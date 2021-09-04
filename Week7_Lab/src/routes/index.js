const express = require('express');
const movieRoute = require('./movies');
const actorRoute = require('./actors');

const router = express.Router();

router.use('/movies', movieRoute);
router.use('/actors', actorRoute);

module.exports = router;
