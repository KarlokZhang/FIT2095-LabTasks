const express = require('express');

const router = express.Router();

router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.post('/', creatPatient);
router.post('/:id', updatePatientById);
router.post('/:id', deletePatientById);

module.exports = router;
