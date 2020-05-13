const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {};

const readNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);

  if (noteFound) {
    console.log(chalk.yellow(noteFound.title));
    console.log(chalk.yellow(noteFound.body));
  } else {
    console.log(chalk.red("Error: Note not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(chalk.green(note.title));
  });
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green("New note added!"));
  } else console.log(chalk.red("Note title taken"));

  saveNotes(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green("Note removed!"));
  } else console.log(chalk.red("Note not found!"));
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes,
  readNote,
};
