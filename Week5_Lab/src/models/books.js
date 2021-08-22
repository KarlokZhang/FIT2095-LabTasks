/* eslint-disable no-console */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const mongoUtil = require('../utils/mongoUtil');

const db = mongoUtil.getDb();

// create
function createBook({ title, author, topic, dop, summary }) {
  const newBook = db.collection('books').insertOne({
    title,
    author,
    topic,
    dop,
    summary,
  });

  return newBook;
}

// get all books
function getAllBooks() {
  db.collection('books')
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
      }
      return data;
    });
}

// get book by id
function getBookById(id) {
  db.collection('week5table').findOne({ id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    return result;
  });
}

// update book by id
function updateBookById({ id, title, author, topic, dop, summary }) {
  const updateData = {
    $set: {
      title,
      author,
      topic,
      dop,
      summary,
    },
  };
  db.collection('week5table').updateOne(
    { id },
    updateData,
    { upsert: false },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      return result;
    }
  );
}

// update book by title
function updateBookByTitle({ title, author, topic, dop, summary }) {
  const updateData = {
    $set: {
      author,
      topic,
      dop,
      summary,
    },
  };
  db.collection('week5table').updateOne(
    { title },
    updateData,
    { upsert: false },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      return result;
    }
  );
}

// delete book by id
function deleteBookById(id) {
  db.collection('books').deleteOne({ id }, (err, obj) => {
    if (err) {
      console.log(err);
    }
    return obj.result;
  });
}

// delete all books by topic
function deleteAllBooksByTopic({ topic }) {
  db.collection('books').deleteMany({ topic }, (err, obj) => {
    if (err) {
      console.log(err);
    }
    return obj.result;
  });
}

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  updateBookByTitle,
  deleteBookById,
  deleteAllBooksByTopic,
};
