const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

const sayHello = (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

const saySomething = (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};


// const sayGoodbye = (req, res) => {
//   res.send("Sorry to see you go!");
// };


// app.get("/say/goodbye", sayGoodbye); // This goes first.
app.get("/say/goodbye", (req, res) => {
  res.send("Sorry to see you go!");
});

app.get("/say/:greeting", saySomething); // This goes after.

app.get("/hello", sayHello);
app.get('/songs', (req, res) => {
  const title = req.query.title;
  res.send(title);
})

module.exports = app;
