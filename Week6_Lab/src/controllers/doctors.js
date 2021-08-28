const Doctor = require('../models/doctors');
const Patient = require('../models/patients');

async function getAllDoctors(req, res) {
  const doctors = await Doctor.find().exec();
  if (!doctors) {
    return res.sendStatus(404);
  }
  return doctors;
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
  const { firstName, lastName, dob, state, suburb, street, unit } = req.body;
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
    return result;
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
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctorById,
  deleteDoctorById,
};
