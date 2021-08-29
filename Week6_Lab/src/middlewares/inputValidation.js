function checkInvalidPatient(req, res, next) {
  const { firstName, lastName, age, dateOfVisit, description, doctorId } =
    req.body;

  if (
    firstName === '' ||
    lastName === '' ||
    age === '' ||
    doctorId === '' ||
    description.length < 10
  ) {
    const errorMessage = {
      message:
        "Patient's first name, last name, age and doctor Id can not be empty. Case description needs to have at least 10 characters.",
      link: '/patients/addPatient',
    };
    return res.render('invalid', { errorMessage });
  }

  if (dateOfVisit === '') {
    req.body.dateOfVisit = undefined;
  }

  next();
}

module.exports = { checkInvalidPatient };
