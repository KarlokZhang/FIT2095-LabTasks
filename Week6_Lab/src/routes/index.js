const express = require('express');
const doctorRoute = require('./doctors');
const patientRoute = require('./patients');

const router = express.Router();

router.use('/doctors', doctorRoute);
router.use('/patients', patientRoute);
router.get('/', getHomePage);

module.exports = router;
