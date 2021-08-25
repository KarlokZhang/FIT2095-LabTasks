// eslint-disable-next-line consistent-return
function checkInvalidData(req, res, next) {
  const { title, author, topic, dop, summary } = req.body;
  if (topic === '') {
    return res.render('invalid');
  }

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
}

// eslint-disable-next-line consistent-return
function checkEmptyTopic(req, res, next) {
  const { topic } = req.body;
  if (topic === '') {
    return res.render('invalid');
  }
  next();
}

// eslint-disable-next-line consistent-return
function checkEmptyInputDate(req, res, next) {
  const { fromDate, toDate } = req.body;
  console.log(req.body);
  if (!fromDate || !toDate) {
    return res.render('invalid');
  }
  next();
}

module.exports = {
  checkEmptyTopic,
  checkInvalidData,
  checkEmptyInputDate,
};
