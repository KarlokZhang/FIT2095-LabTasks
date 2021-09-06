const Movie = require('../../../models/movies');
const Actor = require('../../../models/actors');

const getAllMovies = async () => {
  const movies = await Movie.find().populate('actors').exec();
  return movies;
};

const getMovieById = async (obj, { id }) => {
  const movie = await Movie.findById(id).populate('actors').exec();
  return movie;
};

const getMoviesBetweenYear = async (obj, { fromYear, toYear }) => {
  const movies = await Movie.find({
    $and: [{ year: { $gte: fromYear } }, { year: { $lte: toYear } }],
  }).exec();
  return movies;
};

const getAllActors = async () => {
  const actors = await Actor.find().populate('movies').exec();
  return actors;
};

const getActorById = async (obj, { id }) => {
  const actor = await Actor.findById(id).populate('movies').exec();
  return actor;
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviesBetweenYear,
  getAllActors,
  getActorById,
};
