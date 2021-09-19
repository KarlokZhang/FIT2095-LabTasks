const { Schema, model } = require('mongoose');
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  actors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Actor',
    },
  ],
});
module.exports = model('Movie', movieSchema);
