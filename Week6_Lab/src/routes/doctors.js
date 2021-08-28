const express = require('express');

const {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctorById,
  deleteDoctorById,
} = require('../controllers/doctors');

const router = express.Router();

router.get('/', getAllDoctors);
router.get('/:id', getDoctorById);
router.post('/', createDoctor);
router.post('/:id', updateDoctorById);
router.post('/:id', deleteDoctorById);

module.exports = router;
