const express = require("express");
const pastesRouter = require("./pastes/pastes.router");

const app = express();

// TODO: Follow instructions in the checkpoint to implement ths API.
const pastes = require("./data/pastes-data");
app.use(express.json());



app.use("/pastes", pastesRouter); // Note: app.use


// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, request, response, next) => {
  console.error(error);
  response.send(error);
});

module.exports = app;
