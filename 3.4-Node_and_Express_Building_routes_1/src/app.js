const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

const ping = (req, res, next) => {
  res.send("pong!");
};

const welcome = (req, res, next) => {
    res.send("Welcome to my server.");
  };

app.get("/ping", ping);
app.get("/welcome", welcome);

module.exports = app;
