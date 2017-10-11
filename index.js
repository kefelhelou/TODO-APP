// This is the server file
// TO DO APP
const express = require('express');
const app = express();
const PORT = 5050;

const items = [{describtion: 'study'}, {describtion: 'play'}]; // Defined here to show how can i use xhr to get information from backend

// ADD MIDDLEWARE LOG EVERY REQUEST METHOD AND URL middleware always has next, the must has next()
// IT SHOULD BE IN THE TOP
app.use(function (req, res, next) {
  console.log('Time', Date.now());
  console.log('The request', req.method, req.url);
  next();
});

// SETUP STATIC HANDLER
app.use('/', express.static('public')); // To read the files of frontend

app.get('/items', function (req, res) {
  res.json(items);
});

// GET HTML FILE
// app.get('/index', function (req, res) {
//   res.send('hello');
// });

// LISTEN TO THE PORT
app.listen(PORT, function () {
  console.log('listnig to the port  :', PORT);
});

// app.listen('The app is working on port' + PORT);

// // CREAT A HELLO WORLD IN EXPRESS
// app.get('/', function (req, res) {
//   res.send('hello world');
// });
