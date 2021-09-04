const express = require('express');

const {
  getAllMovies,
  getMoviesBetweenYear,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
  addMovieToActor,
  removeMovieFromActor,
  deleteMoviesBetweenYear,
} = require('../controllers/movies');

const router = express.Router();

router.get('/', getAllMovies);
router.get('/between/:fromYear/:toYear', getMoviesBetweenYear);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.put('/:id', updateMovieById);
router.delete('/deleteBetweenYears', deleteMoviesBetweenYear);
router.delete('/:id', deleteMovieById);

router.post('/:movieId/:actorId', addMovieToActor);
router.delete('/:movieId/:actorId', removeMovieFromActor);

module.exports = router;
