import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setAllNotes] = React.useState([{id:1, title:"Note title", content:"Note content"}]);

  return (
    <div>
      <Header />
      <CreateArea />
      {/*Render all notes*/}
      {notes.map(note => <Note key={note.id} title={note.title} content={note.content} />)}
      <Footer />
    </div>
  );
}

export default App;
