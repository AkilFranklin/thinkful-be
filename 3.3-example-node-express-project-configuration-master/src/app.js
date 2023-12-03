const express = require("express");
const morgan = require('morgan');

const app = express();

const sayHello = (req, res, next) => {
  res.send("Hello!");
};

// const logging = (req, res, next) => {
//   console.log("A request is being made!");
//   next();
// };

app.use(morgan('dev'));
app.get('/hello', sayHello);

module.exports = app;
