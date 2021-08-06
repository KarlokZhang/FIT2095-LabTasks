const { getBookById } = require('../models/Book');

module.exports = function checkBookExist(req, res, next) {
  const { id } = req.params;
  const book = getBookById(id);

  if (!book) {
    return res.sendStatus(404);
  }
  next();
};
