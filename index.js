// TO DO APP
const express = require('express');
const app = express();
const PORT = 8080;

let arr = ['a', 'b', 'c', 'd'];

// ADD MIDDLEWARE LOG EVERY REQUEST METHOD AND URL middleware always has next, the must has next()
// IT SHOULD BE IN THE TOP
app.use(function (req, res, next) {
  console.log('Time', Date.now());
  console.log('The request', req.method, req.url);
  next();
});

app.get('/items', function (req, res) {
  res.send(arr);
});
// SETUP STATIC HANDLER
app.use('/', express.static('public'));

// LISTEN TO THE PORT
app.listen(PORT, function () {
  console.log('listnig to the port  :', PORT);
});

// // CREAT A HELLO WORLD IN EXPRESS
// app.get('/', function (req, res) {
//   res.send('hello world');
// });
