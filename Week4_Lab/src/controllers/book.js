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
  res.render("listbook", { books: books });
}

function getAllBookTitles(req, res) {
  const titles = Book.getAllBookTitles();
  console.log(titles);
  res.render("listtitles", { titles: titles });
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
  getAllBookTitles,
};
