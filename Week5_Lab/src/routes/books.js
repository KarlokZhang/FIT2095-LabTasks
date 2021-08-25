/* eslint-disable import/no-unresolved */
const express = require('express');

const {
  getHomePage,
  getAddBookPage,
  getEditBookPage,
  getDeleteTopicPage,
  getDeleteByDatePage,
  getAllBooks,
  updateBookById,
  updateBookByTitle,
  deleteBookById,
  deleteAllBooksByTopic,
  deleteAllBooksByDateRange,
  createBook,
  addSampleBooks,
} = require('../controllers/books');

const {
  checkInvalidData,
  checkEmptyTopic,
  checkEmptyInputDate,
} = require('../middlewares/checkInvalidData');

const router = express.Router();

// Home Page
router.get('/', getHomePage);
// Add Book Page
router.get('/addbook', getAddBookPage);
// Edit Book Page
router.get('/editBook/:id', getEditBookPage);
// All Books Page
router.get('/listbooks', getAllBooks);
// Delete Book By Topic Page
router.get('/delete/topic', getDeleteTopicPage);
// Delete Book By Date Range Page
router.get('/deleteByDate', getDeleteByDatePage);

// Update Book By Title
router.post('/title/:title', checkInvalidData, updateBookByTitle);
// Update Book By ID
router.post('/id/:id', checkInvalidData, updateBookById);
// Delete Book By ID
router.get('/deleteId/:id', deleteBookById);
// Delete Book By Topics
router.post('/deleteTopic', checkEmptyTopic, deleteAllBooksByTopic);
// Delete Book By Given Date Range
router.post(
  '/deleteByDateRange',
  checkEmptyInputDate,
  deleteAllBooksByDateRange,
);
// Add new Book
router.post('/createBook', checkInvalidData, createBook);

// Add Sample Books
router.post('/addsamplebooks', addSampleBooks);

module.exports = router;
