const express = require('express');

const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
} = require('../controllers/movies');

const router = express.Router();

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.put('/:id', updateMovieById);
router.delete('/:id', deleteMovieById);

module.exports = router;
