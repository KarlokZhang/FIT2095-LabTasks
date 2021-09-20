const mongoose = require("mongoose");
const Movie = require("../models/movies");
const Actor = require("../models/actors");

async function getAllMovies(req, res) {
  const movies = await Movie.find().populate("actors").exec();
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
    return res.status(204).json("Movie have been deleted.");
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function deleteMovieByTitle(req, res) {
  const { title } = req.params;

  try {
    await Movie.deleteOne({ title: title }).exec();
    return res.status(204).json("Movie have been deleted.");
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function addMovieToActor(req, res) {
  const { movieId, actorId } = req.params;

  try {
    const movie = await Movie.findById(movieId).exec();
    const actor = await Actor.findById(actorId).exec();

    if (!actor || !movie) {
      return res.sendStatus(404);
    }

    actor.movies.addToSet(movie._id);
    movie.actors.addToSet(actor.id);
    await actor.save();
    await movie.save();
    return res.json(movie);
  } catch (error) {
    return res.json(error);
  }
}

async function removeMovieFromActor(req, res) {
  const { movieId, actorId } = req.params;

  try {
    const movie = await Movie.findById(movieId).exec();
    const actor = await Actor.findById(actorId).exec();

    if (!actor || !movie) {
      return res.sendStatus(404);
    }

    movie.actors.pull(actor._id);
    actor.movies.pull(movie._id);
    await movie.save();
    await actor.save();
    return res.json(movie);
  } catch (error) {
    return res.json(error);
  }
}

async function getMoviesBetweenYear(req, res) {
  const { fromYear, toYear } = req.params;

  if (fromYear > toYear) {
    return res
      .status(404)
      .json("Invalid Year: from year can not greater then to year.");
  }

  const movies = await Movie.find({
    $and: [{ year: { $gte: fromYear } }, { year: { $lte: toYear } }],
  }).exec();
  if (!movies) {
    return res.sendStatus(404);
  }

  return res.json(movies);
}

async function deleteMoviesBetweenYear(req, res) {
  const { fromYear, toYear } = req.body;

  if (fromYear > toYear) {
    return res
      .status(404)
      .json("Invalid Year: from year can not greater then to year.");
  }

  try {
    const result = await Movie.deleteMany({
      $and: [{ year: { $gte: fromYear } }, { year: { $lte: toYear } }],
    }).exec();
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
}

async function updateMovieYear(req, res) {
  try {
    const result = await Movie.updateMany(
      { title: /^X/ },
      { $inc: { year: 1 } }
    );
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
}

module.exports = {
  getAllMovies,
  getMoviesBetweenYear,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
  deleteMovieByTitle,
  addMovieToActor,
  removeMovieFromActor,
  deleteMoviesBetweenYear,
  updateMovieYear,
};
