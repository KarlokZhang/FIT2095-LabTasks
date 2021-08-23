// eslint-disable-next-line consistent-return
module.exports = function checkInvalidData(req, res, next) {
  const { title, author, topic, dop, summary } = req.body;
  if (
    title.length < 3 ||
    author.length < 3 ||
    topic.length < 3 ||
    summary.length < 3 ||
    dop === ''
  ) {
    return res.render('invalid');
  }
  next();
};
