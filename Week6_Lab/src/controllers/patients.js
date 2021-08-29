const Doctor = require('../models/doctors');
const Patient = require('../models/patients');

function getAddPatientPage(req, res) {
  res.render('addPatient');
}

async function getAllPatients(req, res) {
  const patients = await Patient.find().exec();
  if (!patients) {
    return res.sendStatus(404);
  }
  return patients;
}

async function getPatientById(req, res) {
  const { id } = req.params;
  try {
    const patient = await Patient.findById(id).exec();
    return patient;
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

async function createPatient(req, res) {
  const { firstName, lastName, age, dateOfVisit, description, doctorId } =
    req.body;

  // 1. find if have doctor by doctorId
  //    - yes: update doctor num of patient (+ 1)
  //    - no: return error
  const doctor = await Doctor.findById(doctorId);

  if (!doctor) {
    return res.sendStatus(404);
  }

  try {
    const patient = new Patient({
      fullName: {
        firstName,
        lastName,
      },
      age: age,
      dateOfVisit: dateOfVisit,
      caseDescription: description,
      doctorId: doctorId,
    });

    doctor.numPatients += 1;
    await patient.save();
    await doctor.save();
    return patient;
  } catch (error) {
    console.log(error);
  }
}

async function updatePatientById(req, res) {
  const { id } = req.params;
  const { firstName, lastName, age, dateOfVisit, description, doctorId } =
    req.body;

  // 1. find patient by id
  // 2. find doctor by id
  // 3. update patient
  // 4. check if patient change new doctor
  //    - yes: update doctor patient number (+ || -)
  //    - no: return

  const patient = await Patient.findById(id);
  const currentDoctor = await Doctor.findById(patient.doctorId);
  const doctor = await Doctor.findById(doctorId);

  if (!patient || !doctor || !currentDoctor) {
    return res.sendStatus(404);
  }

  try {
    const patient = await Patient.findByIdAndUpdate(id, {
      fullName: {
        firstName,
        lastName,
      },
      age: age,
      dateOfVisit: dateOfVisit,
      caseDescription: description,
      doctorId: doctorId,
    }).exec();

    // check if change doctor
    if (patient.doctorId !== doctorId) {
      currentDoctor.numPatients -= 1;
      doctor.numPatients += 1;
      await currentDoctor.save();
      await doctor.save();
    }
    res.redirect('/allPatients');
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

async function deletePatientById(req, res) {
  const { id } = req.params;
  try {
    const patient = await Patient.findByIdAndDelete(id).exec();
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

module.exports = {
  getAddPatientPage,
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatientById,
  deletePatientById,
};
