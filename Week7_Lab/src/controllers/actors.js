const mongoose = require('mongoose');
const Actor = require('../models/actors');
const Movie = require('../models/movies');

async function getAllActors(req, res) {
  const actors = await Actor.find().populate('movies').exec();
  if (!actors) {
    rex.sendStatus(404);
  }
  res.json(actors);
}

async function getActorById(req, res) {
  const { id } = req.params;
  const actor = await Actor.findById(id).exec();
  if (!actor) {
    return res.sendStatus(404);
  }
  return res.json(actor);
}

async function createActor(req, res) {
  const { name, bYear } = req.body;
  const actor = new Actor({
    name: name,
    bYear: bYear,
  });

  try {
    const newActor = await actor.save();
    return res.json(newActor);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function updateActorById(req, res) {
  const { id } = req.params;

  const { name, bYear } = req.body;

  try {
    const actor = await Actor.findByIdAndUpdate(id, {
      name: name,
      bYear: bYear,
    });

    if (!actor) {
      return res.sendStatus(404);
    }

    return res.json(actor);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function deleteActorById(req, res) {
  const { id } = req.params;

  try {
    await Actor.findByIdAndDelete(id).exec();
    return res.status(204).json('Actor have been deleted.');
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function addActorToMovie(req, res) {
  const { actorId, movieId } = req.body;

  // 1. find actor
  // 2. find movie
  // 3. add actor id to movie's actor list
  try {
    const actor = await Actor.findById(actorId).exec();
    const movie = await Movie.findById(movieId).exec();

    if (!actor || !movie) {
      return res.sendStatus(404);
    }

    actor.movies.addToSet(movie._id);
    movie.actors.addToSet(actor.id);
    await actor.save();
    await movie.save();
    return res.json(actor);
  } catch (error) {
    return res.json(error);
  }
}

module.exports = {
  getAllActors,
  getActorById,
  createActor,
  updateActorById,
  deleteActorById,
  addActorToMovie,
};
