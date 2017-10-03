// TO DO APP
const express = require('express');
const app = express();
const PORT = 8000;

// CREAT A HELLO WORLD IN EXPRESS
app.get('/', function (req, res) {
  res.send('hello world');
});

// ADD MIDDLEWARE LOG EVERY REQUEST METHOD AND URL
app.use(function (req, res, next) {
  console.log('Time', Date.now());
  console.log('The request', req.method, req.url);
  next();
});

// SETUP STATIC HANDLER

// LISTEN TO THE PORT
app.listen(PORT, function () {
  console.log('listnig to the port  :', PORT);
});
