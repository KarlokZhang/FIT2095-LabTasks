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

const router = express.Router();

router.get('/', getAllDoctorsPage);
router.get('/addDoctor', getAddDoctorPage);
router.get('/edit/:id', getEditDoctorPage);
router.get('/:id', getDoctorById);
router.post('/', createDoctor);
router.post('/edit/:id', updateDoctorById);
router.post('/delete/:id', deleteDoctorById);

module.exports = router;
