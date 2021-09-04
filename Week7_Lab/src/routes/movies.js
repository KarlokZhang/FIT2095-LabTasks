const express = require('express');

const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
  addMovieToActor,
  removeMovieFromActor,
} = require('../controllers/movies');

const router = express.Router();

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.put('/:id', updateMovieById);
router.delete('/:id', deleteMovieById);

router.post('/:movieId/:actorId', addMovieToActor);
router.delete('/:movieId/:actorId', removeMovieFromActor);

module.exports = router;
