const { Schema, model } = require('mongoose');

const actorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bYear: {
    validate: {
      validator: function (newAge) {
        if (Number.isInteger(newAge)) return true;
        else return false;
      },
      message: 'Birth year should be integer',
    },
    type: Number,
    required: true,
  },
  movies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
  ],
});
module.exports = model('Actor', actorSchema);
