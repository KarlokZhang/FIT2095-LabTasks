const dayjs = require('dayjs');
const Doctor = require('../models/doctors');
const Patient = require('../models/patients');

function getAddDoctorPage(req, res) {
  res.render('addDoctor');
}

async function getEditDoctorPage(req, res) {
  const { id } = req.params;
  const doctor = await Doctor.findById(id);
  doctor.dateOfBirth = dayjs(doctor.dateOfBirth).format('YYYY-MM-DD');

  const formattedDoctor = {
    _id: doctor._id,
    firstName: doctor.fullName.firstName,
    lastName: doctor.fullName.lastName,
    dateOfBirth: dayjs(doctor.dateOfBirth).format('YYYY-MM-DD'),
    unit: doctor.address.unit,
    street: doctor.address.street,
    suburb: doctor.address.suburb,
    state: doctor.address.state,
  };

  res.render('editDoctor', { doctor: formattedDoctor });
}

async function getAllDoctorsPage(req, res) {
  const doctors = await Doctor.find().exec();

  if (!doctors) {
    return res.sendStatus(404);
  }

  const doctorsForDisplay = doctors.map((doctor) => ({
    _id: doctor._id,
    fullName: `${doctor.fullName.firstName} ${doctor.fullName.lastName}`,
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
  const { firstName, lastName, dob, state, suburb, street, unit } = req.body;

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
    }).exec();
    res.redirect('/doctors');
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

async function deleteDoctorById(req, res) {
  const { id } = req.params;
  try {
    const result = await Doctor.findByIdAndDelete(id).exec();
    console.log(result);
    res.redirect('/doctors');
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

module.exports = {
  getAllDoctorsPage,
  getAddDoctorPage,
  getEditDoctorPage,
  getDoctorById,
  createDoctor,
  updateDoctorById,
  deleteDoctorById,
};
