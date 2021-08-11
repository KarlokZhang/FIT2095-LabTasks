/* {
  id: Number;
  title: String;
  author: String;
  topic: String;
  price: Number;
} */

let books = [];

// Create
function addBook(title, author, topic, price) {
  let newId = Math.round(Math.random() * 1000);
  const book = {
    id: newId,
    title: title,
    author: author,
    topic: topic,
    price: parseFloat(price),
  };

  books.push(book);
  return book;
}

// List all
function getAllBook() {
  return books;
}

// Find one
function getBookById(id) {
  return books.find((book) => book.id === id);
}

// Update

// Delete
function deleteBookById(id) {
  const bookIndex = getBookIndexById(id);
  books.splice(bookIndex, 1);
}

// helper function
function getBookIndexById(id) {
  return books.findIndex((book) => book.id === id);
}

// get total value of the book store
function getBookStoreValue() {
  let priceList = books.map(book => book.price);
  return priceList.reduce((a, b) => a + b, 0);
}

//get all free books
function deleteAllFreeBooks() { 
  books = books.filter(function (e){
    return e.price > 0;
  });
  return books;
}


module.exports = {
  getAllBook,
  addBook,
  getBookById,
  deleteBookById,
  getBookStoreValue,
  deleteAllFreeBooks,
};


