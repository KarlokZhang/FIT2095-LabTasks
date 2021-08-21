const express = require('express');

const {
  getHomePage,
  getAllBooks,
  getBookById,
  updateBookById,
  updateBookByTitle,
  deleteBookById,
  deleteAllBooksByTopic,
  createBook,
} = require('../controllers/books');

const router = express.Router();

router.get('/', getHomePage);
router.get('/listbooks', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBookById);
router.put('/:title', updateBookByTitle);
router.delete('/id', deleteBookById);
router.delete('/:topic', deleteAllBooksByTopic);
router.post('/addbook', createBook);

module.exports = router;
