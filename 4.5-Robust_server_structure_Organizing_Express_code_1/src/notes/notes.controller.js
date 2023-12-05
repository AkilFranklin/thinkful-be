const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

function hasText(req, res, next) {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next();
  }
  return next({ status: 400, message: "A 'text' property is required." });
}

function noteExists(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    return next();
  } else {
    return next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`,
    });
  }
}

function list(req, res) {
  res.json({ data: notes });
}

function create(req, res) {
  const { data: { text } = {} } = req.body;

  const newNote = {
    id: notes.length + 1, // Assign the next ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}

function read(req, res) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  res.json({ data: foundNote });
}

function update(req, res) {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
  const { data: { name, syntax, expiration, exposure, text } = {} } = req.body;

  // Update the note
  foundNote.name = name;
  foundNote.syntax = syntax;
  foundNote.expiration = expiration;
  foundNote.exposure = exposure;
  foundNote.text = text;

  res.json({ data: foundNote });
}

function destroy(req, res) {
  const { noteId } = req.params;
  const index = notes.findIndex((note) => note.id === Number(noteId));
  // `splice()` returns an array of the deleted elements, even if it is one element
  const deletedNotes = notes.splice(index, 1);
  res.sendStatus(204);
}

module.exports = {
  create: [hasText, create],
  list,
  read: [noteExists, read],
  update: [noteExists, hasText, update],
  delete: [noteExists, destroy],
};
