import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setAllNotes] = React.useState([{title:"Note title", content:"Note content"}]);

  function createNote(note) {
    const newNoteArray = [...notes, note];
    setAllNotes(newNoteArray);
  }

  return (
    <div>
      <Header />
      <CreateArea createNote={createNote}/>
      {/*Render all notes*/}
      {notes.map((note, index) => <Note key={index} title={index} content={note.content} />)}
      <Footer />
    </div>
  );
}

export default App;
