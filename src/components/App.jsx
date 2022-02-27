import React from "react";
// import Header component into App
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

// import notes from notes.js
import notes from "../notes.js";

//2. Create a App.jsx component.
function App() {
  return (
    <div>
      <Header />
      {/*Fetch notes using an Arrow function*/}
      {<Note />}

      <Footer />
    </div>
  );
}

export default App;
