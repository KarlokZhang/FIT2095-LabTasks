const express = require('express');

const {
  getHomePage,
  getAddBookPage,
  getEditBookPage,
  getAllBooks,
  // getBookById,
  updateBookById,
  updateBookByTitle,
  deleteBookById,
  deleteAllBooksByTopic,
  createBook,
} = require('../controllers/books');

const router = express.Router();

router.get('/', getHomePage);
router.get('/addbook', getAddBookPage);
router.get('/editBook/:id', getEditBookPage);
router.get('/listbooks', getAllBooks);
// router.get('/:id', getBookById);
router.post('/title/:title', updateBookByTitle);
router.post('/id/:id', updateBookById);
router.get('/deleteId/:id', deleteBookById);
router.delete('/deleteTopic/:topic', deleteAllBooksByTopic);
router.post('/createBook', createBook);

module.exports = router;
