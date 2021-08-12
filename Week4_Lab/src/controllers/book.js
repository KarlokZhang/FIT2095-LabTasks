/* {
  id: Number;
  title: String;
  author: String;
  topic: String;
  price: Number;
} */

const Book = require('../models/Book');

function getAllBook(req, res) {
  const books = Book.getAllBook();

  if (books.length === 0) {
    return res.send(
      '<h2>Book store is empty, please add some book first.</h2>'
    );
  }
  return res.send(generateList(books));
}

function getBookById(req, res) {
  const { id } = req.params;
  const book = Book.getBookById(id);
  return res.json(book);
}

function addBook(req, res) {
  const { title, author, topic, price } = req.query;
  const book = Book.addBook(title, author, topic, price);
  return res.status(201).json(book);
}

function deleteBookById(req, res) {
  const { id } = req.params;
  Book.deleteBookById(id);
  return res.send(`<h2>Book(id: ${id}) successfully deleted.</h2>`);
}

function getBookStoreValue(req, res) {
  let totalValue = Book.getBookStoreValue();
  return res.send(`<h2>Bookstore's total value is: ${totalValue}</h2>`);
}

function getHomePage(req, res) {
  return res.send('<h1>Welcome to FIT2085 Book Store.</h1>');
}

function deleteAllFreeBooks(req, res) {
  Book.deleteAllFreeBooks();
  return res.send('<h2>All Free Books Deleted</h2>');
}

function generateList(books) {
  let st = 'Id    Title   Author    Topic   Price   </br>';
  for (let i = 0; i < books.length; i++) {
    st +=
      books[i].id +
      '  |  ' +
      books[i].title +
      '  |  ' +
      books[i].author +
      '  |  ' +
      books[i].topic +
      '  |  ' +
      books[i].price +
      '</br>';
  }
  return st;
}

module.exports = {
  getAllBook,
  getBookById,
  addBook,
  deleteBookById,
  getBookStoreValue,
  getHomePage,
  deleteAllFreeBooks,
};
