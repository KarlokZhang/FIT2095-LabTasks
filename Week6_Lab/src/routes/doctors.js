const express = require('express');

const {
  getAllDoctorsPage,
  getAddDoctorPage,
  getEditDoctorPage,
  getDoctorById,
  createDoctor,
  updateDoctorById,
  deleteDoctorById,
} = require('../controllers/doctors');

const { checkInvalidDoctor } = require('../middlewares/inputValidation');

const router = express.Router();

router.get('/', getAllDoctorsPage);
router.get('/addDoctor', getAddDoctorPage);
router.get('/edit/:id', getEditDoctorPage);
router.get('/:id', getDoctorById);
router.post('/', checkInvalidDoctor, createDoctor);
router.post('/edit/:id', updateDoctorById);
router.get('/delete/:id', deleteDoctorById);

module.exports = router;
