const express = require('express');

const {
  getHomePage,
  getAddBookPage,
  getEditBookPage,
  getAllBooks,
  updateBookById,
  updateBookByTitle,
  deleteBookById,
  deleteAllBooksByTopic,
  createBook,
  addSampleBooks,
} = require('../controllers/books');

const checkInvalidData = require('../middlewares/checkInvalidData');

const router = express.Router();

// Home Page
router.get('/', getHomePage);
// Add Book Page
router.get('/addbook', getAddBookPage);
// Edit Book Page
router.get('/editBook/:id', getEditBookPage);
// All Books Page
router.get('/listbooks', getAllBooks);

// Update Book By Title
router.post('/title/:title', checkInvalidData, updateBookByTitle);
// Update Book By ID
router.post('/id/:id', checkInvalidData, updateBookById);
// Delete Book By ID
router.get('/deleteId/:id', deleteBookById);
// Delete Book By Topics
router.delete('/deleteTopic/:topic', deleteAllBooksByTopic);
// Add new Book
router.post('/createBook', checkInvalidData, createBook);

// Add Sample Books
router.post('/addsamplebooks', addSampleBooks);

module.exports = router;
