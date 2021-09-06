const Movie = require('../../../models/movies');

const getAllMovies = async () => {
  try {
    const movies = await Movie.find().populate('actors').exec();
    return movies;
  } catch (error) {
    throw error;
  }
};

const getMovie = async (obj, { id }) => {
  try {
    console.log('getMovie is here, id is: ' + id);
    const movie = await Movie.findById(id).populate('actors').exec();
    return movie;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllMovies, getMovie };
