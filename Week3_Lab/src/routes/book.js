const express = require('express');
const parseId = require('../middleware/parseId');
const checkBookExist = require('../middleware/checkBookExist');

const {
  getAllBook,
  getBookById,
  addBook,
  deleteBookById,
  getBookStoreValue,
} = require('../controllers/book');

const router = express.Router();

router.get('/getallitems', getAllBook);
router.get('/book/:id', parseId, checkBookExist, getBookById);
router.get('/addbook', addBook);
router.get('/deleteid/:id', parseId, checkBookExist, deleteBookById);
router.get('/getbookstorevalue', getBookStoreValue);

module.exports = router;
