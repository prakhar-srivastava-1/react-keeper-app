import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setAllNotes] = React.useState([{title:"Note title", content:"Note content"}]);

  function createNote(newNote) {
    const newNoteArray = [...notes, newNote];
    console.log(newNoteArray);
    setAllNotes(newNoteArray);
  }

  function removeNote(noteId) {
    const newNoteArray = notes.filter((value, index) => index !== noteId);
    setAllNotes(newNoteArray);
  }

  return (
    <div>
      <Header />
      <CreateArea createNewNote={createNote}/>
      {/*Render all notes*/}
      {notes.map((note, index) => <Note deleteNote={removeNote} key={index} id={index} title={note.title} content={note.content} />)}
      <Footer />
    </div>
  );
}

export default App;
