let http = require('http');
let fs = require('fs');
const util = require('./util');

http
  .createServer(function (req, res) {
    let baseURL = 'http://' + req.headers.host + '/';
    let url = new URL(req.url, baseURL);
    let pathName = url.pathname;

    switch (pathName) {
      case '/':
        sendFile('index.html', 200, res);
        break;
      case '/assessments':
        sendFile('assessments.html', 200, res);
        break;
      case '/topics':
        sendFile('topics.html', 200, res);
        break;
      case '/whichweek/':
        let params = url.searchParams;
        let d = params.get('d');
        let m = params.get('m');
        let y = params.get('y');
        let week = util.getDaysDiff(d, m, y);
        let msg = getMessage(week);
        res.end("<h1>" + msg + "</h1>");
        break;
      case '/help':
        sendFile('help.html', 200, res);
        break;
      default:
        sendFile('error.html', 404, res);
        break;
    }
  })
  .listen(5050);
console.log('Server running at http://127.0.0.1:8080/');

const sendFile = (fileName, responseCode, res) => {
  fs.readFile(fileName, (error, content) => {
    if (!error) {
      res.writeHead(responseCode, {
        'Content-Type': 'text/html',
      });
      res.end(content, 'utf-8');
    } else {
      res.end(error.message);
    }
  });
};

const getMessage = (weeks) => {
  const lookupTable = [
    {
      min: Number.NEGATIVE_INFINITY,
      max: 0,
      message: 'Wrong Date!!! First Day in Sem 2 is the 26th of July 2021.',
    },
    {
      min: 0,
      max: 14,
      message: `We are in Week ${weeks}!`,
    },
    {
      min: 14,
      max: Number.POSITIVE_INFINITY,
      message: 'Wrong Date!!! Last Day in Sem 2 is the 5th of November 2021.',
    },
  ];

  let row;

  for (i = 0; i < lookupTable.length; i++) {
    if (weeks > lookupTable[i].min && weeks <= lookupTable[i].max) {
      row = i;
      break;
    }
  }

  return lookupTable[row].message;
};
