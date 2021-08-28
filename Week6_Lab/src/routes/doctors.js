const express = require('express');

const router = express.Router();

router.get('/', getAllDoctors);
router.get('/:id', getAllDoctorById);
router.post('/', createDoctor);
router.post('/:id', updateDoctorById);
router.post('/:id', deleteDoctorById);

module.exports = router;
