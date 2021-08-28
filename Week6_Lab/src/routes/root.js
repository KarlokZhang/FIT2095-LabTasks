const express = require('express');

const { getHomePage } = require('../controllers/root');

const router = express.Router();

router.get('/', getHomePage);

module.exports = router;
