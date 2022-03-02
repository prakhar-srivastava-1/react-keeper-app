import React from "react";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
function Note(props) {

  function handleClick(itemId) {
    console.log(itemId);
    props.deleteNote(itemId);
  }

  return (
    <div className="note">
      <h1>
        {props.title}
      </h1>
      <p>
        {props.content}
      </p>
      <button onClick={
        () => handleClick(props.id)
      }>DEL</button>
    </div>
  );
}

export default Note;
