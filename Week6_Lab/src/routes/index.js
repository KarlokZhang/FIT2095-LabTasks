const express = require('express');
const doctorRoute = require('./doctors');
const patientRoute = require('./patients');
const rootRoute = require('./root');

const router = express.Router();

router.use('/doctors', doctorRoute);
router.use('/patients', patientRoute);
router.use('/', rootRoute);

module.exports = router;
