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
router.put('/title/:title', updateBookByTitle);
router.put('/id/:id', updateBookById);
router.delete('/id/:id', deleteBookById);
router.delete('/topic/:topic', deleteAllBooksByTopic);
router.post('/addbook', createBook);

module.exports = router;
