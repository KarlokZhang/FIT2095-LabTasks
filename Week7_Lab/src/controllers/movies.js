const { Mongoose } = require('mongoose');
const Movie = require('../models/movies');

async function getAllMovies(req, res) {
  const movies = await Movie.find().exec();
  if (!movies) {
    rex.sendStatus(404);
  }
  res.json(movies);
}

async function getMovieById(req, res) {
  const { id } = req.body.params;
  const movie = await Movie.findById(id).populate('actors').exec();
  if (!movie) {
    return res.sendStatus(404)
  }
  return movie;
}

async function createMovie(req, res) {
  const { title, year } = req.body;
  const movie = new Movie({new Mongoose.Types.ObjectId(), title, year})

  try {
    const newMovie = await movie.save();
    return res.json(newMovie)
  } catch (error) {
    return res.status(400).json(error)
  }

}

async function updateMovieById(req, res) {
  const { id } = req.params;

  const { title, year } = req.body;

  try {
    const movie = await Movie.findByIdAndUpdate(id, {
      title: title, 
      year: year,
    })

    if (!movie) {
      return res.sendStatus(404)
    }

    return res.json(movie)
  } catch (error) {
    return res.status(400).json(error)
  }
}

async function deleteMovieById(id) {
  const { id } = req.params;

  try {
    await Movie.findByIdAndDelete(id).exec();
  } catch (error) {
    return res.status(404).json(error)
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
}