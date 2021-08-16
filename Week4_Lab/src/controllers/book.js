/* {
  id: Number;
  title: String;
  author: String;
  topic: String;
  price: Number;
} */

const Book = require("../models/Book");

function getAllBook(req, res) {
  const books = Book.getAllBook();

  // if (books.length === 0) {
  //   return res.send(
  //     '<h2>Book store is empty, please add some book first.</h2>'
  //   );
  // }
  res.render("listbook", { books: books });
}

function addBook(req, res) {
  res.render("addbook", { newBook: null });
}

function getHomePage(req, res) {
  res.render("home");
}

function postNewBook(req, res) {
  const { title, author, topic, price } = req.body;
  const newBook = Book.addBook(title, author, topic, price);
  res.render("addbook", { newBook: newBook });
}

module.exports = {
  getAllBook,
  addBook,
  getHomePage,
  postNewBook,
};
