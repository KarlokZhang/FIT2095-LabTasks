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
  dateOfBirth: {
    type: Date,
    required: true,
  },
  address: {
    state: {
      type: String,
      minlength: 2,
      maxlength: 3,
    },
    suburb: {
      type: String,
      trim: true,
    },
    street: {
      type: String,
      trim: true,
    },
    unit: {
      type: String,
      trim: true,
    },
  },
  numPatients: {
    type: Number,
    default: 0,
  },
});

module.exports = model('Doctor', schema);
