module.exports = function checkInvalidData(req, res, next) {
  const { title, author, topic, price } = req.body;
  if (title.length < 3 || author.length < 3 || topic.length < 3 || price < 0) {
    return res.render('invalid');
  }
  next();
};
