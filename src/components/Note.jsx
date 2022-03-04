import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
function Note(props) {

  function handleClick(itemId) {
    console.log(itemId);
    props.deleteNote(itemId);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={ () => handleClick(props.id) }>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
