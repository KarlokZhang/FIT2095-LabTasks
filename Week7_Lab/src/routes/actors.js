const express = require('express');

const {
  getAllActors,
  getActorById,
  createActor,
  updateActorById,
  deleteActorById,
  addActorToMovie,
} = require('../controllers/actors');

const router = express.Router();

router.get('/', getAllActors);
router.get('/:id', getActorById);
router.post('/', createActor);
router.put('/:id', updateActorById);
router.delete('/:id', deleteActorById);

router.post('/addActorToMovie', addActorToMovie);

module.exports = router;
