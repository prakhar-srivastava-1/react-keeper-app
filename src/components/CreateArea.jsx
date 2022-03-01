import React from "react";

function CreateArea() {

  const [{noteTitle, noteContent}, setNote] = React.useState({
    title: "",
    content: ""
  });

  function captureNote(event) {
    const {value, name} = event.target;
    setNote(prevValue => {
      return {...prevValue, [name]:value}
    });
  }

  return (
    <div>
      <form>
        <input onChange={captureNote} name="title" placeholder="Title" value={noteTitle} />
        <textarea onChange={captureNote} name="content" placeholder="Take a note..." rows="3" value={noteContent} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
