import React from "react";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
function Note() {
  return (
    <div className="note">
      <h1>
        Dummy Note
      </h1>
      <p>
        This is a dummy note! We will try to reuse this component for other notes.
      </p>
    </div>
  );
}

export default Note;
