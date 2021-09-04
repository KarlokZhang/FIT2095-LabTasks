const mongoose = require('mongoose');
const Movie = require('../models/movies');

async function getAllMovies(req, res) {
  const movies = await Movie.find().populate('actors').exec();
  if (!movies) {
    rex.sendStatus(404);
  }
  res.json(movies);
}

async function getMovieById(req, res) {
  const { id } = req.params;
  const movie = await Movie.findById(id).exec();
  if (!movie) {
    return res.sendStatus(404);
  }
  return res.json(movie);
}

async function createMovie(req, res) {
  const { title, year } = req.body;
  const movie = new Movie({
    title: title,
    year: year,
  });

  try {
    const newMovie = await movie.save();
    return res.json(newMovie);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function updateMovieById(req, res) {
  const { id } = req.params;

  const { title, year } = req.body;

  try {
    const movie = await Movie.findByIdAndUpdate(id, {
      title: title,
      year: year,
    });

    if (!movie) {
      return res.sendStatus(404);
    }

    return res.json(movie);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function deleteMovieById(req, res) {
  const { id } = req.params;

  try {
    await Movie.findByIdAndDelete(id).exec();
    return res.status(204).json('Movie have been deleted.');
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
