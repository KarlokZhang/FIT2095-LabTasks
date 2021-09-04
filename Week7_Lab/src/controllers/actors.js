const mongoose = require('mongoose');
const Actor = require('../models/actors');

async function getAllActors(req, res) {
  const actors = await Actor.find().exec();
  if (!actors) {
    rex.sendStatus(404);
  }
  res.json(actors);
}

async function getActorById(req, res) {
  const { id } = req.params;
  console.log('id: ' + id);
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
      title: title,
      year: year,
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
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = {
  getAllActors,
  getActorById,
  createActor,
  updateActorById,
  deleteActorById,
};
