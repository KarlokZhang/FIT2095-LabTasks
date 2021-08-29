const { Schema, model } = require('mongoose');

const schema = new Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: function (age) {
        return age >= 0 && age <= 120;
      },
      message: 'Age must be a number between 0 and 120',
    },
  },
  dateOfVisit: {
    type: Date,
    default: Date.now,
  },
  caseDescription: {
    type: String,
    minlength: 10,
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
  },
});

module.exports = model('Patient', schema);
