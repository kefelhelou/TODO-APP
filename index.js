// TO DO APP
const express = require('express');
const app = express();
const PORT = 4000;

const items = [{description: 'study'}, {description: 'play'} ];

// ADD MIDDLEWARE LOG EVERY REQUEST METHOD AND URL middleware always has next, the must has next()
// IT SHOULD BE IN THE TOP
app.use(function (req, res, next) {
  console.log('Time', Date.now());
  console.log('The request', req.method, req.url);
  next();
});

// SETUP STATIC HANDLER
app.use('/', express.static('public'));

app.get('/items', function (req, res) {
  res.json(items);
});

// GET HTML FILE
// app.get('/index', function (req, res) {
//   res.send('hello');
// });

// LISTEN TO THE PORT
app.listen(PORT, function () {
  console.log('listnig to the port :', PORT);
});

// // CREAT A HELLO WORLD IN EXPRESS
// app.get('/', function (req, res) {
//   res.send('hello world');
// });
