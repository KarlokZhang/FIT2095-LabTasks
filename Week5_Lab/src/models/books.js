/* eslint-disable no-console */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const { ObjectId } = require('mongodb');
const mongoUtil = require('../utils/mongoUtil');

const { getDb } = mongoUtil;

// create
async function createBook(title, author, topic, dop, summary) {
  const db = getDb();
  try {
    const result = await db.collection('books').insertOne({
      title,
      author,
      topic,
      dop,
      summary,
    });
    return result.insertedId;
  } catch (error) {
    console.log(error);
  }
  return null;
}

// get all books
async function getAllBooks() {
  const db = getDb();
  try {
    const books = await db.collection('books').find().toArray();
    return books;
  } catch (error) {
    console.log(error);
  }
  return null;
}

// get book by id
async function getBookById(id) {
  const db = getDb();
  try {
    const book = await db.collection('books').findOne({ _id: ObjectId(id) });
    return book;
  } catch (error) {
    console.log(error);
  }
  return null;
}

// update book by id
async function updateBookById(id, title, author, topic, dop, summary) {
  const db = getDb();
  try {
    const updateData = {
      $set: {
        title,
        author,
        topic,
        dop,
        summary,
      },
    };
    const result = await db
      .collection('books')
      .updateOne({ _id: ObjectId(id) }, updateData, { upsert: true });
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

// update book by title
async function updateBookByTitle(title, author, topic, dop, summary) {
  const db = getDb();
  try {
    const updateData = {
      $set: {
        author,
        topic,
        dop,
        summary,
      },
    };
    const result = await db
      .collection('books')
      .updateOne({ title }, updateData, { upsert: true });
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

// delete book by id
async function deleteBookById(id) {
  const db = getDb();
  try {
    const result = await db
      .collection('books')
      .deleteOne({ _id: ObjectId(id) });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

// delete all books by topic
async function deleteAllBooksByTopic(topic) {
  const db = getDb();
  try {
    const result = await db.collection('books').deleteMany({ topic });
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
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
