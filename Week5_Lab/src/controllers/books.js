/* eslint-disable comma-dangle */
const dayjs = require('dayjs');
const Book = require('../models/books');
const { getBookById } = require('../models/books');

function getHomePage(req, res) {
  res.render('home');
}

function getAddBookPage(req, res) {
  res.render('addBook');
}

function getDeleteTopicPage(req, res) {
  res.render('deleteTopic');
}

function getDeleteByDatePage(req, res) {
  res.render('deleteByDate');
}

async function getEditBookPage(req, res) {
  const { id } = req.params;
  const book = await getBookById(id);
  res.render('editBook', {
    book,
  });
}

async function getAllBooks(req, res) {
  const allBooks = await Book.getAllBooks();
  const booksForDisplay = allBooks.map((book) => ({
    ...book,
    dop: dayjs(book.dop).format('DD/MM/YYYY'),
  }));
  res.render('listbook', {
    books: booksForDisplay,
  });
}

async function createBook(req, res) {
  const { title, author, topic, dop, summary } = req.body;
  await Book.createBook(title, author, topic, dop, summary);
  res.redirect('/listbooks');
}

// Add Sample Books
async function addSampleBooks(req, res) {
  const books = await Book.addSampleBooks();
  return res.json(books);
}

// async function getBookById(req, res) {
//   const { id } = req.params;
//   const book = await Book.getBookById(id);
//   if (!book) {
//     return res.sendStatus(404);
//   }
//   return res.json(book);
// }

async function updateBookById(req, res) {
  const { id } = req.params;
  const { title, author, topic, dop, summary } = req.body;
  const result = await Book.updateBookById(
    id,
    title,
    author,
    topic,
    dop,
    summary,
  );
  // eslint-disable-next-line no-console
  console.log('update result: ', result);
  res.redirect('/listbooks');
}

async function updateBookByTitle(req, res) {
  const { title } = req.params;
  const { author, topic, dop, summary } = req.body;
  const result = await Book.updateBookByTitle(
    title,
    author,
    topic,
    dop,
    summary,
  );
  return res.json(result);
}

async function deleteBookById(req, res) {
  const { id } = req.params;
  await Book.deleteBookById(id);
  res.redirect('/listbooks');
}

// eslint-disable-next-line consistent-return
async function deleteAllBooksByTopic(req, res) {
  const { topic } = req.body;
  const result = await Book.deleteAllBooksByTopic(topic);
  console.log(result);
  res.redirect('/listbooks');
}
async function deleteAllBooksByDateRange(req, res) {
  const { fromDate, toDate } = req.body;
  const result = await Book.deleteAllBooksByDateRange(fromDate, toDate);
  console.log(result);
  res.redirect('listbooks');
}

module.exports = {
  getHomePage,
  getAddBookPage,
  getEditBookPage,
  getDeleteTopicPage,
  getDeleteByDatePage,
  getAllBooks,
  // getBookById,
  updateBookByTitle,
  updateBookById,
  deleteBookById,
  deleteAllBooksByTopic,
  deleteAllBooksByDateRange,
  createBook,
  addSampleBooks,
};
