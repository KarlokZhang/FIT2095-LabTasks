/* eslint-disable object-curly-newline */
const mongodb = require('mongodb');

const { MongoClient } = mongodb;

const logger = console;

let db;

module.exports = {
  connectToDb: () => {
    const dbName = process.env.DB_NAME;
    const url = process.env.CONNECTION_URL;

    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
      if (err) {
        logger.log('Err  ', err);
      } else {
        logger.log('Connected successfully to MongoDb server');
        db = client.db(dbName);
      }
    });
  },
  getDb: () => db,
};
