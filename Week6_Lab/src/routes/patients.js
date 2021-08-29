const express = require('express');

const {
  getAddPatientPage,
  getAllPatientsPage,
  getPatientById,
  createPatient,
  updatePatientById,
  deletePatientById,
} = require('../controllers/patients');

const { checkInvalidPatient } = require('../middlewares/inputValidation');

const router = express.Router();

router.get('/addPatient', getAddPatientPage);
router.get('/', getAllPatientsPage);
router.get('/:id', getPatientById);
router.post('/', checkInvalidPatient, createPatient);
router.post('/:id', updatePatientById);
router.get('/delete/:id', deletePatientById);

module.exports = router;
