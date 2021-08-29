const dayjs = require('dayjs');
const Doctor = require('../models/doctors');
const Patient = require('../models/patients');

function getAddDoctorPage(req, res) {
  res.render('addDoctor');
}

async function getAllDoctorsPage(req, res) {
  const doctors = await Doctor.find().exec();

  if (!doctors) {
    return res.sendStatus(404);
  }

  const doctorsForDisplay = doctors.map((doctor) => ({
    ...doctor,
    _id: doctor._id,
    fullName: `${doctor.fullName.firstName} ${doctor.fullName.firstName}`,
    dateOfBirth: dayjs(doctor.dateOfBirth).format('DD/MM/YYYY'),
    address: `${doctor.address.unit}, ${doctor.address.street}, ${
      doctor.address.suburb
    }, ${doctor.address.state.toUpperCase()}`,
    numPatients: doctor.numPatients,
  }));

  res.render('allDoctors', { allDoctors: doctorsForDisplay });
}

async function getDoctorById(req, res) {
  const { id } = req.params;
  const doctor = await Doctor.findById(id).exec();
  if (!doctor) {
    return res.sendStatus(404);
  }
  return doctor;
}

async function createDoctor(req, res) {
  const { firstName, lastName, dob, unit, street, suburb, state } = req.body;
  const doctor = new Doctor({
    fullName: {
      firstName,
      lastName,
    },
    dateOfBirth: dob,
    address: {
      state,
      suburb,
      street,
      unit,
    },
  });

  try {
    const result = await doctor.save();
    console.log(result);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

async function updateDoctorById(req, res) {
  const { id } = req.params;
  const { firstName, lastName, dob, state, suburb, street, unit, numPatients } =
    req.body;

  try {
    const doctor = await Doctor.findByIdAndUpdate(id, {
      fullName: {
        firstName,
        lastName,
      },
      dateOfBirth: dob,
      address: {
        state,
        suburb,
        street,
        unit,
      },
      numPatients: numPatients,
    }).exec();
    return doctor;
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

async function deleteDoctorById(req, res) {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findByIdAndDelete(id).exec();
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

module.exports = {
  getAddDoctorPage,
  getAllDoctorsPage,
  getDoctorById,
  createDoctor,
  updateDoctorById,
  deleteDoctorById,
};
