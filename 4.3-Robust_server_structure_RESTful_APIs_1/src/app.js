const express = require("express");
const app = express();

const notes = require("./data/notes-data");
app.use(express.json());

app.get("/notes/:noteId", (req, res, next) => {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
  if (foundNote) {
    res.json({ data: foundNote });
  } else {
    next(`Note id not found: ${req.params.noteId}`)
  }
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

// TODO: Add ability to create a new note
let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);
app.post("/notes", (req, res, next) => {
  const { data: { text } = {} } = req.body;
  if (text) {
    const newNote = { id: ++lastNoteId, text };
    notes.push(newNote);
    res.status(201).json({ data: newNote });
  } else {
    res.sendStatus(400);
  }
});
// TODO: Add not-found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});
// TODO: Add error handler
app.use((error, request, response, next) => {
  console.error(error);
  response.status(400).send(error);
});
module.exports = app;
