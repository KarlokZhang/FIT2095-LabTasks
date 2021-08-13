const express = require('express');

const checkInvalidData = require('../middleware/checkInvalidData');

const {
  getAllBook,
  addBook,
  getHomePage,
  postNewBook,
} = require('../controllers/book');

const router = express.Router();

router.get('/', getHomePage);
router.get('/listbooks', getAllBook);
router.get('/addbook', addBook);

router.post('/newbookdata', checkInvalidData, postNewBook);

module.exports = router;
