/* eslint-disable comma-dangle */
const Book = require('../models/books');

function getHomePage(req, res) {
  res.render('home');
}

async function getAllBooks(req, res) {
  const books = await Book.getAllBooks();
  return res.json(books);
}

async function createBook(req, res) {
  const { title, author, topic, dop, summary } = req.body;
  const newBookId = await Book.createBook(title, author, topic, dop, summary);
  return res.json(newBookId);
}

async function getBookById(req, res) {
  const { id } = req.params;
  const book = await Book.getBookById(id);
  if (!book) {
    return res.sendStatus(404);
  }
  return res.json(book);
}

async function updateBookById(req, res) {
  const { id } = req.params;
  const { title, author, topic, dop, summary } = req.body;
  const result = await Book.updateBookById(
    id,
    title,
    author,
    topic,
    dop,
    summary
  );
  return res.json(result);
}

async function updateBookByTitle(req, res) {
  const { title } = req.params;
  const { author, topic, dop, summary } = req.body;
  const result = await Book.updateBookByTitle(
    title,
    author,
    topic,
    dop,
    summary
  );
  return res.json(result);
}

async function deleteBookById(req, res) {
  const { id } = req.params;
  const result = await Book.deleteBookById(id);
  if (!result) {
    return res.sendStatus(404);
  }
  return res.json(result);
}

async function deleteAllBooksByTopic(req, res) {
  const { topic } = req.params;
  const result = await Book.deleteAllBooksByTopic(topic);
  if (result.deletedCount === 0) {
    return res.sendStatus(404);
  }
  return res.json(result);
}

module.exports = {
  getHomePage,
  getAllBooks,
  getBookById,
  updateBookByTitle,
  updateBookById,
  deleteBookById,
  deleteAllBooksByTopic,
  createBook,
};
