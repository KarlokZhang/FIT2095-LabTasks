const express = require('express');

const {
  getAddPatientPage,
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatientById,
  deletePatientById,
} = require('../controllers/patients');

const router = express.Router();

router.get('/addPatient', getAddPatientPage);
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.post('/', createPatient);
router.post('/:id', updatePatientById);
router.post('/:id', deletePatientById);

module.exports = router;
